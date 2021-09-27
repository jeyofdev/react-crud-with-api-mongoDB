import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.8);
`;

export const Content = styled.div`
    background-color: #fefefe;
    padding: 20px;
    width: 80%;
    max-width: 600px;
    border-radius: 6px;
`;
