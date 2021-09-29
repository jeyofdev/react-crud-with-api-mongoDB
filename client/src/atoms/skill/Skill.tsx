import PropTypes from 'prop-types';
import { useState } from 'react';
import { SkillPropsType } from '../../types';
import * as styled from './Skill.styled';

const Skill = ({ title, votes, updateSkills }: SkillPropsType) => {
    const [currentVote, setCurrentVote] = useState(votes);

    const updateVote = () => {
        setCurrentVote(currentVote + 1);
        updateSkills(title, currentVote + 1);
    };

    return (
        <li>
            <styled.Skill onClick={updateVote}>
                {title}
                <styled.Votes>{currentVote}</styled.Votes>
            </styled.Skill>
        </li>
    );
};

export const SkillPropType = {
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    updateSkills: PropTypes.func.isRequired,
};

Skill.propTypes = SkillPropType;

export default Skill;
