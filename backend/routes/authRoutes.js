const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { registerUser, loginUser, logoutUser, refreshAccessToken, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
], registerUser);

router.post('/login', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
], loginUser);

router.post('/logout', logoutUser);
router.get('/refresh', refreshAccessToken);
router.get('/me', protect, getMe);

module.exports = router;
