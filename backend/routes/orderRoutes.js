const express = require('express');
const router = express.Router();
const {
    createOrder,
    getMyOrders,
    getOrders,
    updateOrderStatus
} = require('../controllers/orderController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
    .post(protect, createOrder)
    .get(protect, authorize('admin', 'pharmacist'), getOrders);

router.route('/my')
    .get(protect, getMyOrders);

router.route('/:id/status')
    .put(protect, authorize('admin', 'pharmacist'), updateOrderStatus);

module.exports = router;
