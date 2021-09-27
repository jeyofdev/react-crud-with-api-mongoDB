import express, { Request, Response } from 'express';
import {
    getAllUsers,
    getUserByName,
    postUser,
} from '../controllers/userController';

const router = express.Router();

router.post('/', postUser);
router.get('/', getAllUsers);
router.get('/:name', getUserByName);

/* eslint-disable */
router.use((error: any, req: Request, res: Response, next: Function) => {
    res.json(error);
    res.status(error.status).json({
        success: false,
        message: error.message,
    });
});
/* eslint-disable */

export default router;
