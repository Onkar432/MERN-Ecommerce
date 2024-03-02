const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const connectDB = () => {
    mongoose
        .connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log(`MongoDB connected successfully`);
        })

};

module.exports = connectDB;
