const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Product = require('../models/Product');
const Prescription = require('../models/Prescription');
const bcrypt = require('bcryptjs');
const connectDB = require('../config/db');

dotenv.config();

const importData = async () => {
    try {
        await connectDB();
        await User.deleteMany();
        await Product.deleteMany();
        await Prescription.deleteMany();
        // Clear orders too if model was imported, but focusing on base data.

        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash('password123', salt);

        const users = [
            {
                name: 'Admin User',
                email: 'admin@example.com',
                password: 'password123',
                role: 'admin'
            },
            {
                name: 'Pharmacist User',
                email: 'pharma@example.com',
                password: 'password123',
                role: 'pharmacist'
            },
            {
                name: 'John Doe',
                email: 'user@example.com',
                password: 'password123',
                role: 'user'
            }
        ];



        let createdUsers = [];
        for (const u of users) {
            const user = await User.create(u);
            createdUsers.push(user);
        }

        console.log('Users Imported');

        const products = [
            {
                name: 'Paracetamol',
                description: 'Pain reliever',
                category: 'Medicine',
                price: 5.99,
                stock: 100,
                expiryDate: new Date('2025-12-31'),
                isPrescriptionRequired: false
            },
            {
                name: 'Antibiotic X',
                description: 'Strong antibiotic',
                category: 'Medicine',
                price: 25.50,
                stock: 50,
                expiryDate: new Date('2025-06-30'),
                isPrescriptionRequired: true
            },
            {
                name: 'Vitamin C',
                description: 'Immunity booster',
                category: 'Supplement',
                price: 12.00,
                stock: 200,
                expiryDate: new Date('2026-01-01'),
                isPrescriptionRequired: false
            },
            {
                name: 'Vitamin D3',
                description: 'Supports bone strength and immunity',
                category: 'Supplement',
                price: 15.50,
                stock: 180,
                expiryDate: new Date('2027-09-14'),
                isPrescriptionRequired: false
            },
            {
                name: 'Multivitamin Tablets',
                description: 'Daily essential vitamins and minerals',
                category: 'Supplement',
                price: 19.99,
                stock: 120,
                expiryDate: new Date('2028-01-01'),
                isPrescriptionRequired: false
            },
            {
                name: 'Paracetamol',
                description: 'Pain and fever relief',
                category: 'Medicine',
                price: 5.99,
                stock: 300,
                expiryDate: new Date('2026-12-31'),
                isPrescriptionRequired: false
            },
            {
                name: 'Cough Syrup',
                description: 'Relieves cough and chest congestion',
                category: 'Medicine',
                price: 9.50,
                stock: 90,
                expiryDate: new Date('2026-04-09'),
                isPrescriptionRequired: false
            },
            {
                name: 'Antacid Tablets',
                description: 'Relief from acidity and indigestion',
                category: 'Medicine',
                price: 6.75,
                stock: 150,
                expiryDate: new Date('2026-08-15'),
                isPrescriptionRequired: false
            },
            {
                name: 'Digital Thermometer',
                description: 'Accurate body temperature measurement',
                category: 'Devices',
                price: 18.99,
                stock: 60,
                expiryDate: null,
                isPrescriptionRequired: false
            },
            {
                name: 'Blood Pressure Monitor',
                description: 'Monitors blood pressure at home',
                category: 'Devices',
                price: 45.99,
                stock: 20,
                expiryDate: null,
                isPrescriptionRequired: false
            },
            {
                name: 'Bandage Roll',
                description: 'Used for wound dressing and support',
                category: 'First Aid',
                price: 3.99,
                stock: 400,
                expiryDate: null,
                isPrescriptionRequired: false
            },
            {
                name: 'Aloe Vera Gel',
                description: 'Soothes skin and minor burns',
                category: 'Skin Care',
                price: 6.49,
                stock: 160,
                expiryDate: new Date('2026-08-01'),
                isPrescriptionRequired: false
            }

        ];

        await Product.insertMany(products);
        console.log('Products Imported');

        // Sample Prescription for user
        await Prescription.create({
            user: createdUsers[2]._id,
            fileUrl: '/uploads/sample-prescription.jpg',
            status: 'pending'
        });
        console.log('Sample Prescription Imported');

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

importData();
