const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDB = async () => {

    dotenv.config();
    try {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@grubby.yretr.mongodb.net/test?retryWrites=true&w=majority`,
        {
        useNewUrlParser: true,
        useUnifiedTopology: true
        }
    );

    console.log('MongoDB is Connected...');
    } catch (err) {
    console.error(err.message);
    process.exit(1);
    }
};

module.exports = connectDB;
