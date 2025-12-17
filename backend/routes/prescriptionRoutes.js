const express = require('express');
const router = express.Router();
const {
    uploadPrescription,
    getMyPrescriptions,
    getPrescriptions,
    updatePrescriptionStatus
} = require('../controllers/prescriptionController');
const { protect, authorize } = require('../middleware/authMiddleware');
const upload = require('../config/upload');

router.route('/')
    .post(protect, upload.single('file'), uploadPrescription)
    .get(protect, authorize('admin', 'pharmacist'), getPrescriptions);

router.route('/my')
    .get(protect, getMyPrescriptions);

router.route('/:id/status')
    .patch(protect, authorize('admin', 'pharmacist'), updatePrescriptionStatus);

module.exports = router;
