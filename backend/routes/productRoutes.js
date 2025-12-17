const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
    .get(getProducts)
    .post(protect, authorize('admin', 'pharmacist'), [
        check('name', 'Name is required').not().isEmpty(),
        check('price', 'Price is required').isNumeric(),
        check('stock', 'Stock is required').isInt(),
        check('expiryDate', 'Expiry Date is required').not().isEmpty(),
        check('isPrescriptionRequired', 'Is Prescription Required is required').isBoolean()
    ], createProduct);

router.route('/:id')
    .get(getProductById)
    .put(protect, authorize('admin', 'pharmacist'), updateProduct)
    .delete(protect, authorize('admin'), deleteProduct);

module.exports = router;
