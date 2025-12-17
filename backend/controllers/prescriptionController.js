const Prescription = require('../models/Prescription');

// @desc    Upload a prescription
// @route   POST /api/prescriptions
// @access  Private
const uploadPrescription = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Please upload a file' });
    }

    try {
        const prescription = new Prescription({
            user: req.user._id,
            fileUrl: `/uploads/${req.file.filename}`
        });

        const createdPrescription = await prescription.save();
        res.status(201).json(createdPrescription);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get my prescriptions
// @route   GET /api/prescriptions/my
// @access  Private
const getMyPrescriptions = async (req, res) => {
    try {
        const prescriptions = await Prescription.find({ user: req.user._id });
        res.json(prescriptions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all prescriptions
// @route   GET /api/prescriptions
// @access  Private/Admin/Pharmacist
const getPrescriptions = async (req, res) => {
    try {
        const prescriptions = await Prescription.find({}).populate('user', 'id name email');
        res.json(prescriptions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update prescription status
// @route   PATCH /api/prescriptions/:id/status
// @access  Private/Admin/Pharmacist
const updatePrescriptionStatus = async (req, res) => {
    const { status, reviewNote } = req.body;

    try {
        const prescription = await Prescription.findById(req.params.id);

        if (prescription) {
            prescription.status = status || prescription.status;
            prescription.reviewNote = reviewNote || prescription.reviewNote;
            prescription.reviewedBy = req.user._id;

            const updatedPrescription = await prescription.save();
            res.json(updatedPrescription);
        } else {
            res.status(404).json({ message: 'Prescription not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    uploadPrescription,
    getMyPrescriptions,
    getPrescriptions,
    updatePrescriptionStatus
};
