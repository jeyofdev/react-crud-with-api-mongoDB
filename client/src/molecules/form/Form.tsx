import { ChangeEvent, FormEvent, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Input, Textarea } from '../../atoms/form/input/Input';
import * as styled from './Form.styled';
import { FormType, SkillPropsType } from '../../types';
import { postUser, updateUser } from '../../utils/request';
import { useHistory } from 'react-router';
import { skillsOptionsDatas } from '../../datas/formDatas';
import Checkbox from '../../atoms/form/checkbox/Checkbox';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ _id, name, content, skills, method }: FormType) => {
    const history = useHistory();
    const [currentName, setCurrentName] = useState<string>(name ? name : '');
    const [currentContent, setCurrentContent] = useState<string>(
        content ? content : ''
    );
    const [currentSkills, setCurrentSkills] = useState<SkillPropsType[]>(
        skills ?? []
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentSkills(
            e.target.checked
                ? [...currentSkills, { title: e.target.name, votes: 0 }]
                : currentSkills.filter((skill) => skill.title !== e.target.name)
        );
    };

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (method === 'post') {
                await postUser(currentName, currentContent, currentSkills);
                setCurrentName('');
                setCurrentContent('');
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
                await updateUser(
                    _id,
                    currentName,
                    currentContent,
                    currentSkills
                );
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
                        setCurrentName(e.currentTarget.value);
                    }}
                />

                <Textarea
                    label="content"
                    name="content"
                    value={currentContent}
                    rows={8}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setCurrentContent(e.currentTarget.value);
                    }}
                />

                <styled.Skills>
                    {skillsOptionsDatas.map((skill) => (
                        <Checkbox
                            key={uuidv4()}
                            label={skill}
                            name={skill}
                            checked={
                                currentSkills.filter(
                                    (item) => item.title === skill
                                ).length > 0
                            }
                            onChange={handleChange}
                        />
                    ))}
                </styled.Skills>

                {currentName && currentContent && (
                    <div>
                        <styled.Submit type="submit" />
                    </div>
                )}
            </form>
        </styled.Container>
    );
};

Form.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
    method: PropTypes.string.isRequired,
};

export default Form;
