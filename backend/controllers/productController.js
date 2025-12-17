const Product = require('../models/Product');
const { validationResult } = require('express-validator');

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin/Pharmacist
const createProduct = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        name,
        description,
        category,
        price,
        images,
        stock,
        expiryDate,
        isPrescriptionRequired
    } = req.body;

    // Validate expiry date: cannot add product with expiryDate in the past
    if (new Date(expiryDate) < new Date()) {
        return res.status(400).json({ message: 'Expiry date cannot be in the past' });
    }

    try {
        const product = new Product({
            name,
            description,
            category,
            price,
            images,
            stock,
            expiryDate,
            isPrescriptionRequired
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin/Pharmacist
const updateProduct = async (req, res) => {
    const {
        name,
        description,
        category,
        price,
        images,
        stock,
        expiryDate,
        isPrescriptionRequired
    } = req.body;

    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            if (expiryDate && new Date(expiryDate) < new Date()) {
                return res.status(400).json({ message: 'Expiry date cannot be in the past' });
            }

            if (stock !== undefined && stock < 0) {
                return res.status(400).json({ message: 'Stock cannot be negative' });
            }

            product.name = name || product.name;
            product.description = description || product.description;
            product.category = category || product.category;
            product.price = price || product.price;
            product.images = images || product.images;
            product.stock = stock !== undefined ? stock : product.stock;
            product.expiryDate = expiryDate || product.expiryDate;
            product.isPrescriptionRequired = isPrescriptionRequired !== undefined ? isPrescriptionRequired : product.isPrescriptionRequired;

            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            await product.deleteOne(); // Mongoose 7+
            res.json({ message: 'Product removed' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
