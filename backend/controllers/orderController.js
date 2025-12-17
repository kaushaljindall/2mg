const Order = require('../models/Order');
const Product = require('../models/Product');
const Prescription = require('../models/Prescription');

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const createOrder = async (req, res) => {
    console.log('[ORDER] createOrder called');
    console.log('[ORDER] User:', req.user ? req.user._id : 'No User');
    console.log('[ORDER] Body:', JSON.stringify(req.body, null, 2));

    const { orderItems, prescriptionId, totalPrice } = req.body;

    if (orderItems && orderItems.length === 0) {
        console.warn('[ORDER] No order items');
        return res.status(400).json({ ok: false, error: 'No order items' });
    }

    try {
        let requiresPrescription = false;

        // 1. Validate Stock & Expiry & Prescription Requirement
        for (const item of orderItems) {
            const product = await Product.findById(item.product);

            if (!product) {
                return res.status(404).json({ ok: false, error: `Product not found: ${item.name}` });
            }

            if (product.stock < item.qty) {
                return res.status(400).json({ ok: false, error: `Insufficient stock for ${product.name}` });
            }

            if (new Date(product.expiryDate) < new Date()) {
                return res.status(400).json({ ok: false, error: `Product ${product.name} is expired` });
            }

            if (product.isPrescriptionRequired) {
                requiresPrescription = true;
            }
        }

        // 2. Validate Prescription if required
        if (requiresPrescription) {
            if (!prescriptionId) {
                return res.status(400).json({ ok: false, error: 'Prescription required for this order' });
            }
            const prescription = await Prescription.findById(prescriptionId);
            if (!prescription) {
                return res.status(400).json({ ok: false, error: 'Invalid subscription ID' });
            }
            if (prescription.user.toString() !== req.user._id.toString()) {
                return res.status(400).json({ ok: false, error: 'Prescription does not belong to user' });
            }
            if (prescription.status !== 'approved') {
                return res.status(400).json({ ok: false, error: 'Prescription is not approved yet' });
            }
        }

        // 3. Decrement Stock (Atomic with check)
        for (const item of orderItems) {
            const updatedProduct = await Product.findOneAndUpdate(
                { _id: item.product, stock: { $gte: item.qty } },
                { $inc: { stock: -item.qty } },
                { new: true }
            );

            if (!updatedProduct) {
                return res.status(400).json({ ok: false, error: `Failed to place order: Insufficient stock for ${item.name}` });
            }
        }

        const order = new Order({
            user: req.user._id,
            orderItems,
            prescription: prescriptionId,
            totalPrice
        });

        const createdOrder = await order.save();
        res.status(201).json({ ok: true, order: createdOrder });

    } catch (error) {
        res.status(500).json({ ok: false, error: error.message });
    }
};

// @desc    Get logged in user orders
// @route   GET /api/orders/my
// @access  Private
const getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).populate('user', 'id name').sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update order status
// @route   PUT /api/orders/:id/status
// @access  Private/Admin
const updateOrderStatus = async (req, res) => {
    const { status } = req.body;
    try {
        const order = await Order.findById(req.params.id);

        if (order) {
            order.status = status;
            const updatedOrder = await order.save();
            res.json(updatedOrder);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createOrder,
    getMyOrders,
    getOrders,
    updateOrderStatus
};
