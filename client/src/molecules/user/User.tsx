import { useState } from 'react';
import Skill from '../../atoms/skill/Skills';
import PropTypes from 'prop-types';
import { UserProps } from '../../types';
import * as styled from './User.styled';
import { ButtonIcon } from '../../atoms/buttons/Button';
import Modal from '../../organisms/modal/Modal';
import Dialog from '../dialog/Dialog';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const User = ({ name, content, skills }: UserProps) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleModalIsOpen = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const deleteWilder = () => {
        console.log('delete successfull');
    };

    return (
        <styled.Article>
            <ButtonIcon
                themeColor="danger"
                icon={faTimes}
                onClick={handleModalIsOpen}
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
                                    key={skill.title}
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
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
};

export default User;
