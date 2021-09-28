import axios from 'axios';
import { SetStateAction } from 'react';
import { UserType } from '../types';

export const getAllUsers = async (
    setUsers: (value: SetStateAction<UserType[]>) => void,
    setIsLoading: (value: SetStateAction<boolean>) => void
) => {
    const response = await axios.get('/api/users');
    setUsers(response.data.result);
    setIsLoading(true);
};

export const postUser = async (name: string, content: string) => {
    await axios.post('/api/users', {
        name,
        content,
    });
};

export const updateUser = async (
    _id: string,
    name: string,
    content: string
) => {
    await axios.put(`/api/users/${_id}`, {
        name,
        content,
    });
};
