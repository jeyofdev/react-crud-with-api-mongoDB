import { Request, Response } from 'express';
import UserModel from '../model/userModel';

/**
 * Post new user
 */
export const postUser = async (req: Request, res: Response) => {
    try {
        await UserModel.init();

        const newUser = new UserModel(req.body);
        const result = await newUser.save();

        res.status(200).json({
            success: true,
            message: 'added successfull',
            result,
        });
    } catch (err) {
        res.status(500).json({ success: false, result: err });
    }
};

/**
 * Get all users
 */
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        await UserModel.init();
        const result = await UserModel.find();

        if (result.length === 0) {
            res.status(404).json({
                success: false,
                result: 'no users found.',
            });
            return;
        }

        res.status(200).json({ success: true, result });
    } catch (err) {
        res.status(500).json({ success: false, result: err });
    }
};

/**
 * Get user By name
 */
export const getUserByName = async (req: Request, res: Response) => {
    try {
        await UserModel.init();
        const { name } = req.params;
        const result = await UserModel.findOne({ name });

        if (result === null) {
            res.status(404).json({
                success: false,
                result: 'no user found with this name.',
            });
            return;
        }

        res.status(200).json({ success: true, result });
    } catch (err) {
        res.status(500).json({ success: false, result: err });
    }
};
