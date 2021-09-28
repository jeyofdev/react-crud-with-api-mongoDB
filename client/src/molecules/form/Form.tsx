import { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import { Input, Textarea } from '../../atoms/form/input/Input';
import * as styled from './Form.styled';
import { FormType } from '../../types';
import { SUCCESS, DANGER } from '../../styles/constants.styles';
import { ToastContainer, toast, ToastContent } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ _id, name, content, skills, method }: FormType) => {
    const [currentName, setName] = useState<string>(name ? name : '');
    const [currentContent, setContent] = useState<string>(
        content ? content : ''
    );

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (method === 'post') {
                await axios.post('/api/users', {
                    name: currentName,
                    content: currentContent,
                });
                setName('');
                setContent('');
                notifyUserHasBeenAdded();
            } else if (method === 'put') {
                await axios.put(`/api/users/${_id}`, {
                    name: currentName,
                    content: currentContent,
                });
                notifyUserHasBeenUpdated();
            }
        } catch (error) {
            axios.isAxiosError(error) &&
                notifyError(error.response?.data.result);
        }
    };

    const notifyUserHasBeenAdded = () => {
        toast.success(`The user with the name ${currentName} has been added`, {
            theme: 'colored',
            style: {
                background: SUCCESS,
            },
        });
    };

    const notifyUserHasBeenUpdated = () => {
        toast.success(
            `The user with the name ${currentName} has been updated`,
            {
                theme: 'colored',
                style: {
                    background: SUCCESS,
                },
            }
        );
    };

    const notifyError = (error: ToastContent) => {
        toast.error(error, {
            theme: 'colored',
            style: {
                background: DANGER,
            },
        });
    };

    return (
        <styled.Container>
            <form onSubmit={submitForm}>
                <Input
                    label="name"
                    name="name"
                    value={currentName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setName(e.currentTarget.value);
                    }}
                />

                <Textarea
                    label="content"
                    name="content"
                    value={currentContent}
                    rows={8}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setContent(e.currentTarget.value);
                    }}
                />

                {currentName && currentContent && (
                    <div>
                        <styled.Submit type="submit" />
                    </div>
                )}
            </form>

            <ToastContainer position="bottom-right" />
        </styled.Container>
    );
};

export default Form;
