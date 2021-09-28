import React from 'react';
import { Link } from 'react-router-dom';
import User from '../../molecules/user/User';
import Layout from '../../templates/layout/Layout';
import * as styled from './Details.styled';

const Details = (props: any) => {
    const { _id, name, content, skills } = props.location.state.user;

    return (
        <Layout>
            <Link to="/" className="btn-link" style={{ margin: '1rem 0 ' }}>
                Back to home
            </Link>

            <styled.Section>
                <User
                    key={_id}
                    _id={_id}
                    name={name}
                    content={content}
                    skills={skills}
                    onDelete={() => {}}
                    details={true}
                />
            </styled.Section>
        </Layout>
    );
};

export default Details;
