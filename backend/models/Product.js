const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    images: [{
        type: String
    }],
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    expiryDate: {
        type: Date,
        required: true
    },
    isPrescriptionRequired: {
        type: Boolean,
        default: false,
        required: true
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
