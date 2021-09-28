import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 32%);
    justify-content: space-between;
    margin-top: 2rem;
`;

export const NoWilders = styled.span`
    background-color: #f76c6c;
    color: #fff;
    padding: 0.5rem;
    border-radius: 3px;
    grid-column: 1 / 4;
    text-align: center;
`;
