import { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import { Input, Textarea } from '../../atoms/form/input/Input';
import * as styled from './Form.styled';
import { FormType } from '../../types';

const Form = ({ _id, name, content, skills, method }: FormType) => {
    const [currentName, setName] = useState<string>(name ? name : '');
    const [currentContent, setContent] = useState<string>(
        content ? content : ''
    );

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (method === 'post') {
            await axios.post('/api/users', {
                name: currentName,
                content: currentContent,
            });
            setName('');
            setContent('');
        } else if (method === 'put') {
            await axios.put(`/api/users/${_id}`, {
                name: currentName,
                content: currentContent,
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
        </styled.Container>
    );
};

export default Form;
