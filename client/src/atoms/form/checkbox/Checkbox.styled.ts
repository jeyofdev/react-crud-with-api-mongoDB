import styled from 'styled-components';
import { DANGER } from '../../../styles/constants.styles';

export const Checkbox = styled.div`
    padding: 0.75rem;
    border-radius: 5px;
    margin-right: 1rem;
    border: 1px solid ${DANGER};
`;
export const Input = styled.input`
    cursor: pointer;
    margin: 3px;
`;

export const Label = styled.label`
    text-transform: capitalize;
`;
