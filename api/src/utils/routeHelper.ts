import { Response } from 'express';

const makeResponse = (
    response: Response,
    statusCode: number,
    success: boolean,
    result: object[] | object | null,
    message?: string
) => {
    response.status(statusCode).json({ success, message, result });
    return null;
};

export default makeResponse;
