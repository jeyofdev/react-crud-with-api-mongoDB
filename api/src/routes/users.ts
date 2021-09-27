import express, { Request, Response } from 'express';
import {
    deleteUserById,
    getAllUsers,
    getUserByName,
    postUser,
    updateUserById,
} from '../controllers/userController';

const router = express.Router();

router.post('/', postUser);
router.get('/', getAllUsers);
router.get('/:name', getUserByName);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);

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
