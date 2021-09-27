import express from 'express';
import {
    getAllUsers,
    getUserByName,
    postUser,
} from '../controllers/userController';

const router = express.Router();

router.post('/', postUser);
router.get('/', getAllUsers);
router.get('/:name', getUserByName);

export default router;
