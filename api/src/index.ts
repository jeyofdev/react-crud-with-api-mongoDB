import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const { PORT, MONGO_URL } = process.env;

const app = express();

// connect MongoDB
const connectOptions = { autoIndex: true };

if (!MONGO_URL) {
    throw Error('A MONGO_URL must be provided in environment.');
}
mongoose
    .connect(MONGO_URL, connectOptions)
    .then(() => console.log('Connected to database MongoDB')) // eslint-disable-line
    .catch((err) => console.log(err)); // eslint-disable-line

// Listen for connection
app.listen(PORT, () => {
    try {
        console.log(`app listening at http://localhost:${PORT}`); // eslint-disable-line
    } catch (err) {
        throw new Error('Something bad happened...');
    }
});
