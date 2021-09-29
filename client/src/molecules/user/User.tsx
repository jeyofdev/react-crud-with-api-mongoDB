import { useEffect, useState } from 'react';
import Skill from '../../atoms/skill/Skill';
import PropTypes from 'prop-types';
import { UserProps } from '../../types';
import * as styled from './User.styled';
import { ButtonIcon } from '../../atoms/buttons/Button';
import Modal from '../../organisms/modal/Modal';
import Dialog from '../dialog/Dialog';
import { faTimes, faPen, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { useHistory } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { notifyError, notifySuccess } from '../../utils/notification';
import { DANGER, SUCCESS } from '../../styles/constants.styles';
import { updateUser } from '../../utils/request';

const User = ({ _id, name, content, skills, onDelete, details }: UserProps) => {
    const history = useHistory();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [likes, setLikes] = useState(0);
    const [userSkills, setUserSkills] = useState(skills);
    const [reload, setReload] = useState(false);

    const handleModalIsOpen = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const incrementLikes = () => {
        setLikes(likes + 1);
    };

    const updateSkills = (title: string, vote: number) => {
        const skillsUpdated = userSkills.map((skill) =>
            skill.title !== title ? skill : { ...skill, votes: vote }
        );
        setUserSkills(skillsUpdated);

        setReload(true);
    };

    useEffect(() => {
        if (reload) {
            updateUser(_id, name, content, userSkills);
            setReload(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userSkills]);

    const deleteUser = async () => {
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
                themeColor="transparent"
                color={DANGER}
                icon={likes > 0 ? faHeart : farHeart}
                size="1.25rem"
                onClick={incrementLikes}
            />
            <styled.Votes>{likes}</styled.Votes>

            <ButtonIcon
                themeColor={DANGER}
                icon={faTimes}
                right="0.5rem"
                size="1rem"
                onClick={handleModalIsOpen}
            />

            <ButtonIcon
                themeColor={SUCCESS}
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

            {userSkills.length > 0 && (
                <>
                    <styled.Ul>
                        {userSkills.map((skill) => {
                            return (
                                <Skill
                                    key={skill._id}
                                    title={skill.title}
                                    votes={skill.votes}
                                    updateSkills={updateSkills}
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
                        onConfirmation={deleteUser}
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
