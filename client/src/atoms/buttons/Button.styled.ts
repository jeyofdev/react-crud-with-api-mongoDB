import styled from 'styled-components';
import { DANGER, SUCCESS } from '../../styles/constants.styles';

export const Button = styled.button<{ themeColor: string; margin: string }>`
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 0.4rem;
    border: none;
    background-color: ${({ themeColor }) =>
        themeColor === 'success' ? SUCCESS : DANGER};
    color: white;
    margin: ${({ margin }) => margin};
    margin-left: 0;
    cursor: pointer;
`;

export const ButtonIcon = styled.button<{ themeColor: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: 25px;
    font-size: 1rem;
    background-color: ${({ themeColor }) =>
        themeColor === 'success' ? SUCCESS : DANGER};
    color: white;
    border: none;
    border-radius: 100%;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
`;
