import { toast, ToastContent } from 'react-toastify';
import { SUCCESS, DANGER } from '../styles/constants.styles';

export const notifySuccess = (message: string) => {
    toast.success(message, {
        theme: 'colored',
        style: {
            background: SUCCESS,
        },
    });
};

export const notifyError = (error: ToastContent) => {
    toast.error(error, {
        theme: 'colored',
        style: {
            background: DANGER,
        },
    });
};
