import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const { MONGO_URL } = process.env;

/**
 * Connect to mongoDB
 */
const ConnectDb = async (
    success: string,
    options?: mongoose.ConnectOptions | undefined
) => {
    if (!MONGO_URL) {
        throw new Error('A MONGO_URL must be provided in .env');
    }

    try {
        await mongoose.connect(MONGO_URL, options);
        console.log(success); // eslint-disable-line
    } catch (err) {
        console.log(err); // eslint-disable-line
    }
};

export default ConnectDb;
