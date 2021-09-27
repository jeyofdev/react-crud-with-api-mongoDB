import Skill from '../../atoms/skill/Skills';
import PropTypes from 'prop-types';
import { UserProps } from '../../types';
import * as styled from './User.styled';

const User = ({ name, content, skills }: UserProps) => {
    return (
        <styled.Article>
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
        </styled.Article>
    );
};

User.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
};

export default User;
