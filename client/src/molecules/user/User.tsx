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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { notifyError, notifySuccess } from '../../utils/notification';

const User = ({ _id, name, content, skills, onDelete, details }: UserProps) => {
    const history = useHistory();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleModalIsOpen = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const deleteWilder = async () => {
        try {
            await axios.delete(`/api/users/${_id}`);
            setModalIsOpen(false);

            onDelete(name);
            notifySuccess(`The user with the name ${name} has been deleted`);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                notifyError(error.response?.data.result);
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

            {!details && (
                <Link
                    to={{
                        pathname: `/users/details/${_id}`,
                        state: { user: { _id, name, content, skills } },
                    }}
                    className="btn-user-link"
                >
                    Voir plus
                </Link>
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
            <ToastContainer position="bottom-right" />
        </styled.Article>
    );
};

User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
    onDelete: PropTypes.func,
};

export default User;
