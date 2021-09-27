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
        return;
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
        return;
    }

    makeResponse(res, 200, true, result);
};

/**
 * Update user by id
 */
export const updateUserById = async (req: Request, res: Response) => {
    await UserModel.init();
    const { id } = req.params;
    const result = await UserModel.updateOne({ _id: id }, req.body);

    if (result.modifiedCount === 0) {
        makeResponse(res, 404, false, null, 'user does not exist.');
        return;
    }

    makeResponse(res, 200, true, result, 'update successfull');
};

/**
 * Delete user by id
 */
export const deleteUserById = async (req: Request, res: Response) => {
    await UserModel.init();
    const { id } = req.params;
    const result = await UserModel.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
        makeResponse(res, 404, false, null, 'user does not exist.');
        return;
    }

    makeResponse(res, 200, true, result, 'delete successfull');
};
