const mongoose = require('mongoose');
const User = require('../models/User');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

const cleanUser = async () => {
    await connectDB();
    const email = 'kaushal@gmail.com';
    try {
        const user = await User.findOne({ email });
        if (user) {
            console.log(`Found zombie user: ${user.name} (${user.email})`);
            await User.deleteOne({ _id: user._id });
            console.log('User deleted. Logic fixed.');
        } else {
            console.log('User not found. Clean slate.');
        }
    } catch (err) {
        console.error(err);
    } finally {
        mongoose.connection.close();
    }
};

cleanUser();
