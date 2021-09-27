import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import ConnectDb from './config/database';

dotenv.config();
const { PORT } = process.env;

const app = express();

// connect MongoDB
const connectOptions = { autoIndex: true };
ConnectDb('Connected to database MongoDB', connectOptions);

// config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// init routes
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Welcome' });
});
app.use('/api', routes);

// 404
app.use((req: Request, res: Response) => {
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
