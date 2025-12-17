const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');

            if (!req.user) {
                return res.status(401).json({ ok: false, error: 'Not authorized, user not found' });
            }

            next();
        } catch (error) {
            console.error('[AUTH] Protect Middleware Error:', error.message);
            res.status(401).json({ ok: false, error: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ ok: false, error: 'Not authorized, no token' });
    }
};

const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ ok: false, error: 'Not authorized as an admin' });
    }
};

// Generic role authorization middleware
const authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                ok: false,
                error: `User role ${req.user.role} is not authorized to access this route`
            });
        }
        next();
    };
};

module.exports = { protect, admin, authorize };
