import React from 'react';
import PropTypes from 'prop-types';
import { LayoutType } from '../../types/index';
import * as styled from './Layout.styled';

const Layout = ({ children }: LayoutType) => {
    return (
        <styled.Main>
            <styled.Header>
                <styled.Container>
                    <h1>Users Book</h1>
                </styled.Container>
            </styled.Header>

            <styled.Container>{children}</styled.Container>

            <styled.Footer>
                <styled.Container>
                    <p>&copy; 2020 jeyofdev</p>
                </styled.Container>
            </styled.Footer>
        </styled.Main>
    );
};

Layout.propTypes = {
    children: PropTypes.array.isRequired,
};

export default Layout;
