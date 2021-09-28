import { useState } from 'react';
import Skill from '../../atoms/skill/Skill';
import PropTypes from 'prop-types';
import { UserProps } from '../../types';
import * as styled from './User.styled';
import { ButtonIcon } from '../../atoms/buttons/Button';
import Modal from '../../organisms/modal/Modal';
import Dialog from '../dialog/Dialog';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useHistory } from 'react-router';

const User = ({ _id, name, content, skills, onDelete }: UserProps) => {
    const history = useHistory();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleModalIsOpen = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const deleteWilder = async () => {
        try {
            await axios.delete(`api/users/${_id}`);
            setModalIsOpen(false);
            onDelete(name);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('err');
            }
        }
    };

    return (
        <styled.Article>
            <ButtonIcon
                themeColor="danger"
                icon={faTimes}
                right="0.5rem"
                size="1rem"
                onClick={handleModalIsOpen}
            />

            <ButtonIcon
                themeColor="success"
                icon={faPen}
                right="2.5rem"
                size="0.75rem"
                onClick={() =>
                    history.push({
                        pathname: `/users/update/${_id}`,
                        state: {
                            user: {
                                _id,
                                name,
                                content,
                                skills,
                            },
                        },
                    })
                }
            />

            <styled.Img
                src="/assets/images/blank-profile-picture-female.png"
                alt="Jane Doe Profile"
            />

            <styled.H3>{name}</styled.H3>
            <styled.Paragraph>{content}</styled.Paragraph>

            {skills.length > 0 && (
                <>
                    <styled.Ul>
                        {skills.map((skill) => {
                            return (
                                <Skill
                                    key={skill._id}
                                    title={skill.title}
                                    votes={skill.votes}
                                />
                            );
                        })}
                    </styled.Ul>
                </>
            )}

            {modalIsOpen && (
                <Modal onClose={handleModalIsOpen}>
                    <Dialog
                        content={`Êtes vous sûr de vouloir supprimer le wilder '${name}'?`}
                        onCancel={handleModalIsOpen}
                        onConfirmation={deleteWilder}
                    />
                </Modal>
            )}
        </styled.Article>
    );
};

User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default User;
