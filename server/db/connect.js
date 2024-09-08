// const mongoose = require('mongoose');
// import mongoose from 'mongoose';


// uri ="mongodb://localhost:27017/users"

// const connectDB = () => {

//     return mongoose.connect(uri, {
//         useNewUrlParser : true,
//         useUnifiedTopology: true
//     });
// }

// module.exports = connectDB  

import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const uri = 'mongodb://localhost:27017/RealEstate'; // Replace with your MongoDB URI
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;

