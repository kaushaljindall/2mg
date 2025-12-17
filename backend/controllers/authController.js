const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const crypto = require('crypto');

// Generate Access Token (15m)
const generateAccessToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '15m',
    });
};

// Generate Refresh Token (30d)
const generateRefreshToken = () => {
    const tokenId = crypto.randomBytes(40).toString('hex');
    const token = jwt.sign({ tokenId }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '30d',
    });
    return { token, tokenId };
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ ok: false, error: errors.array()[0].msg });
    }

    const { name, email, password, role } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ ok: false, error: 'User already exists' });
        }

        const user = await User.create({
            name,
            email,
            password,
            role: role || 'user'
        });

        if (user) {
            console.log(`[AUTH] Registered: ${email}`);
            // Immediately login after signup
            const accessToken = generateAccessToken(user);
            const { token: refreshToken, tokenId } = generateRefreshToken();

            // Save refresh token to DB
            user.refreshTokens.push({
                tokenId,
                expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
            });
            await user.save();

            // Send Refresh Token in HttpOnly Cookie
            // Secure: true should be used in production (HTTPS)
            // SameSite: 'lax' is generally safe for navigation
            res.cookie('jwt', refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                path: '/', // Accessible on all paths
                maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
            });

            res.status(201).json({
                ok: true,
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                accessToken,
            });
        } else {
            res.status(400).json({ ok: false, error: 'Invalid user data' });
        }
    } catch (error) {
        console.error(`[AUTH] Register Error: ${error.message}`);
        res.status(500).json({ ok: false, error: 'Server error' });
    }
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ ok: false, error: errors.array()[0].msg });
    }

    const { email, password } = req.body;
    console.log(`[AUTH] Login attempt for: ${email}`);

    try {
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            console.log(`[AUTH] Login success: ${email}`);
            const accessToken = generateAccessToken(user);
            const { token: refreshToken, tokenId } = generateRefreshToken();

            // Save refresh token to DB (Rotation policy: could limit max sessions here)
            // Limit to 5 active sessions
            if (user.refreshTokens.length >= 5) {
                user.refreshTokens.shift(); // Remove oldest
            }

            user.refreshTokens.push({
                tokenId,
                expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
            });
            await user.save();

            // Send Refresh Token in HttpOnly Cookie
            res.cookie('jwt', refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                path: '/',
                maxAge: 30 * 24 * 60 * 60 * 1000
            });

            res.json({
                ok: true,
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                accessToken,
            });
        } else {
            console.warn(`[AUTH] Login failed (Invalid Credentials): ${email}`);
            res.status(401).json({ ok: false, error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error(`[AUTH] Login Error: ${error.message}`);
        res.status(500).json({ ok: false, error: 'Server error' });
    }
};

// @desc    Logout user / Clear cookie
// @route   POST /api/auth/logout
// @access  Public
const logoutUser = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content

    const refreshToken = cookies.jwt;

    try {
        let decoded;
        try {
            decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        } catch (err) {
            console.log(`[AUTH] Logout: Invalid token, clearing cookie`);
            res.clearCookie('jwt', { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/' });
            return res.sendStatus(204);
        }

        const user = await User.findOne({ "refreshTokens.tokenId": decoded.tokenId });

        if (user) {
            console.log(`[AUTH] Logout: ${user.email}`);
            user.refreshTokens = user.refreshTokens.filter(rt => rt.tokenId !== decoded.tokenId);
            await user.save();
        }

        res.clearCookie('jwt', { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/' });
        res.sendStatus(204);

    } catch (error) {
        console.error(`[AUTH] Logout Error: ${error.message}`);
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/' });
        res.sendStatus(204);
    }
};

// @desc    Refresh Access Token
// @route   GET /api/auth/refresh
// @access  Public (Cookie based)
const refreshAccessToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.status(401).json({ ok: false, error: 'No refresh token' });

    const refreshToken = cookies.jwt;

    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

        const user = await User.findOne({ "refreshTokens.tokenId": decoded.tokenId });

        if (!user) {
            console.warn(`[AUTH] Refresh Reuse/Hack detected for token: ${decoded.tokenId}`);
            return res.status(403).json({ ok: false, error: 'Invalid refresh token (Reuse Detected)' });
        }

        console.log(`[AUTH] Refreshing token for: ${user.email}`);

        // Rotate Token
        const newAccessToken = generateAccessToken(user);
        const { token: newRefreshToken, tokenId: newTokenId } = generateRefreshToken();

        // Update existing token record (Rotation)
        const rtIndex = user.refreshTokens.findIndex(rt => rt.tokenId === decoded.tokenId);
        if (rtIndex !== -1) {
            user.refreshTokens[rtIndex] = {
                tokenId: newTokenId,
                expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
            };
        }

        await user.save();

        res.cookie('jwt', newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 30 * 24 * 60 * 60 * 1000
        });

        res.json({ ok: true, accessToken: newAccessToken });

    } catch (error) {
        console.error(`[AUTH] Refresh Error: ${error.message}`);
        if (error.name === 'JsonWebTokenError') {
            return res.status(403).json({ ok: false, error: 'Invalid refresh token' });
        }
        res.status(500).json({ ok: false, error: 'Server error' });
    }
};

// @desc    Get current user profile
// @route   GET /api/auth/profile
// @access  Private
const getMe = async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            ok: true,
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        });
    } else {
        res.status(404).json({ ok: false, error: 'User not found' });
    }
};

module.exports = { registerUser, loginUser, logoutUser, refreshAccessToken, getMe };
