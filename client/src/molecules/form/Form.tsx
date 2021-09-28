import { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import { Input, Textarea } from '../../atoms/form/input/Input';
import * as styled from './Form.styled';
import { FormType } from '../../types';
import { postUser, updateUser } from '../../utils/request';
import { useHistory } from 'react-router';

const Form = ({ _id, name, content, skills, method }: FormType) => {
    const history = useHistory();
    const [currentName, setName] = useState<string>(name ? name : '');
    const [currentContent, setContent] = useState<string>(
        content ? content : ''
    );

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (method === 'post') {
                await postUser(currentName, currentContent);
                setName('');
                setContent('');
                history.push({
                    pathname: '/',
                    state: {
                        notif: {
                            message: `The user with the name ${currentName} has been added`,
                            type: 'success',
                        },
                    },
                });
            } else if (method === 'put') {
                await updateUser(_id, currentName, currentContent);
                history.push({
                    pathname: '/',
                    state: {
                        notif: {
                            message: `The user with the name ${currentName} has been updated`,
                            type: 'success',
                        },
                    },
                });
            }
        } catch (error) {
            axios.isAxiosError(error) &&
                history.push({
                    pathname: '/',
                    state: {
                        notif: {
                            message: error.response?.data.result,
                            type: 'error',
                        },
                    },
                });
        }
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

            {/* <ToastContainer position="bottom-right" /> */}
        </styled.Container>
    );
};

export default Form;
