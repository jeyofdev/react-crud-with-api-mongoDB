import PropTypes from 'prop-types';
import { SkillPropsType } from '../../types';
import * as styled from './Skill.styled';

const Skill = ({ title, votes }: SkillPropsType) => {
    return (
        <styled.Skill>
            {title}
            <styled.Votes>{votes}</styled.Votes>
        </styled.Skill>
    );
};

export const SkillPropType = {
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
};

Skill.propTypes = SkillPropType;

export default Skill;
