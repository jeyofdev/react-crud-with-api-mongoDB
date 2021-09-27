import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes';

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

// config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// init routes
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome' });
});
app.use('/api', routes);

// 404
app.use((req, res) => {
    res.status(404).json({
        success: false,
        result: 'This route does not exist.',
    });
});

// Listen for connection
app.listen(PORT, () => {
    try {
        console.log(`app listening at http://localhost:${PORT}`); // eslint-disable-line
    } catch (err) {
        throw new Error('Something bad happened...');
    }
});
