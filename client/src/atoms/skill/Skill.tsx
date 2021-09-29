import PropTypes from 'prop-types';
import { useState } from 'react';
import { SkillPropsType } from '../../types';
import * as styled from './Skill.styled';

const Skill = ({ title, votes }: SkillPropsType) => {
    const [currentVote, setCurrentVote] = useState(votes);

    const incrementVote = () => {
        setCurrentVote(currentVote + 1);
    };

    return (
        <li>
            <styled.Skill onClick={incrementVote}>
                {title}

                <styled.Votes>{currentVote}</styled.Votes>
            </styled.Skill>
        </li>
    );
};

export const SkillPropType = {
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
};

Skill.propTypes = SkillPropType;

export default Skill;
