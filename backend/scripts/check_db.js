const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Product = require('../models/Product');
const connectDB = require('../config/db');

dotenv.config();

const checkData = async () => {
    try {
        await connectDB();
        const userCount = await User.countDocuments();
        const productCount = await Product.countDocuments();
        console.log(`Users: ${userCount}`);
        console.log(`Products: ${productCount}`);
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

checkData();
