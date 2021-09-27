import { Request, Response } from 'express';
import UserModel from '../model/userModel';
import makeResponse from '../utils/routeHelper';

/**
 * Post new user
 */
export const postUser = async (req: Request, res: Response) => {
    await UserModel.init();

    const newUser = new UserModel(req.body);
    const result = await newUser.save();

    makeResponse(res, 200, true, result, 'added successfull');
};

/**
 * Get all users
 */
export const getAllUsers = async (req: Request, res: Response) => {
    await UserModel.init();
    const result = await UserModel.find();

    if (result.length === 0) {
        makeResponse(res, 404, false, null, 'no users found.');
    }

    makeResponse(res, 200, true, result);
};

/**
 * Get user By name
 */
export const getUserByName = async (req: Request, res: Response) => {
    await UserModel.init();
    const { name } = req.params;
    const result = await UserModel.findOne({ name });

    if (result === null) {
        makeResponse(res, 404, false, null, 'no user found with this name.');
    }

    makeResponse(res, 200, true, result);
};
