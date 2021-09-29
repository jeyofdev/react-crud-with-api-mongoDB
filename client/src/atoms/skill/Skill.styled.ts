import styled from 'styled-components';

export const Skill = styled.button`
    margin: 4px 0;
    padding: 0.35rem;
    display: flex;
    justify-content: space-around;
    border: #f76c6c 1px solid;
    border-radius: 4px;
    line-height: 1;
    cursor: pointer;
    color: #757575;
`;

export const Votes = styled.span<{ children: number }>`
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: ${({ children }) =>
        children > 3 ? 'rgba(0, 100, 0, 0.5)' : 'rgba(231, 76, 60, 0.5)'};
    color: #fff;
    border-radius: 9999px;
    height: 15px;
    width: 15px;
    margin-left: 2.5px;
    font-size: 0.7rem;
`;
