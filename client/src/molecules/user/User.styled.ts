import styled from 'styled-components';

export const Article = styled.article`
    position: relative;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #c9c9c9;
    border-radius: 7px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    margin-bottom: 1rem;
    text-align: center;
`;

export const Votes = styled.p`
    position: absolute;
    top: 0.5rem;
    right: auto;
    margin-left: 1.75rem;
    line-height: 25px;
    font-size: 1.1rem;
    color: #757575;
`;

export const Img = styled.img`
    border-radius: 7px 7px 0 0;
    margin-bottom: 20px;
    max-width: 100%;
    height: auto;
`;

export const H3 = styled.h3`
    color: #f76c6c;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: start;
    margin-bottom: 1rem;
    text-align: center;
    text-transform: uppercase;
`;

export const H4 = styled.h4`
    color: #f76c6c;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: start;
`;

export const Em = styled.em`
    padding: 0.25em;
    background-color: #eddbff;
    border-radius: 4px;
`;

export const Paragraph = styled.p`
    color: #757575;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 1rem;
`;

export const Ul = styled.ul`
    color: #757575;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;
