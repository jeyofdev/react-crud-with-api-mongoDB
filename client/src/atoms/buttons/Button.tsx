import * as styled from './Button.styled';
import PropTypes from 'prop-types';
import { ButtonIconType, ButtonType } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = ({
    children,
    themeColor,
    margin,
    onClick,
}: ButtonType) => (
    <styled.Button themeColor={themeColor} margin={margin} onClick={onClick}>
        {children}
    </styled.Button>
);

export const ButtonIcon = ({ themeColor, icon, onClick }: ButtonIconType) => (
    <styled.ButtonIcon themeColor={themeColor} onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
    </styled.ButtonIcon>
);

Button.propTypes = {
    children: PropTypes.string.isRequired,
    themeColor: PropTypes.string.isRequired,
    margin: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
    onClick: PropTypes.func.isRequired,
};
