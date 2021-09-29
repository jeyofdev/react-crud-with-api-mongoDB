import axios from 'axios';
import { SetStateAction } from 'react';
import { SkillPropsType, UserType } from '../types';

export const getAllUsers = async (
    setUsers: (value: SetStateAction<UserType[]>) => void,
    setIsLoading: (value: SetStateAction<boolean>) => void
) => {
    const response = await axios.get('/api/users');
    setUsers(response.data.result);
    setIsLoading(true);
};

export const postUser = async (
    name: string,
    content: string,
    skills: SkillPropsType[]
) => {
    await axios.post('/api/users', {
        name:
            name.split('').slice(0, 1).join('').toUpperCase() +
            name.split('').slice(1).join(''),
        content,
        skills,
    });
};

export const updateUser = async (
    _id: string,
    name: string,
    content: string,
    skills: SkillPropsType[]
) => {
    await axios.put(`/api/users/${_id}`, {
        name:
            name.split('').slice(0, 1).join('').toUpperCase() +
            name.split('').slice(1).join(''),
        content,
        skills,
    });
};
