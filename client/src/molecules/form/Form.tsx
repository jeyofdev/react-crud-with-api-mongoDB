import { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import { Input, Textarea } from '../../atoms/form/input/Input';
import * as styled from './Form.styled';

const Form = () => {
    const [name, setName] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await axios.post('/api/users', { name, content });
        setName('');
        setContent('');
    };

    return (
        <styled.Container>
            <form onSubmit={submitForm}>
                <Input
                    label="name"
                    name="name"
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setName(e.currentTarget.value);
                    }}
                />

                <Textarea
                    label="content"
                    name="content"
                    value={content}
                    rows={8}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setContent(e.currentTarget.value);
                    }}
                />

                {name && content && (
                    <div>
                        <styled.Submit type="submit" />
                    </div>
                )}
            </form>
        </styled.Container>
    );
};

export default Form;
