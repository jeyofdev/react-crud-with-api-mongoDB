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

export const ButtonIcon = ({
    themeColor,
    icon,
    right,
    size,
    onClick,
}: ButtonIconType) => {
    return (
        <>
            <styled.ButtonIcon
                themeColor={themeColor}
                size={size}
                right={right}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={icon} />
            </styled.ButtonIcon>
        </>
    );
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
    themeColor: PropTypes.string.isRequired,
    margin: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
    size: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
    isLink: PropTypes.string.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};
