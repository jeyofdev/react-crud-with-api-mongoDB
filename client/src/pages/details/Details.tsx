import React from 'react';
import User from '../../molecules/user/User';
import Layout from '../../templates/layout/Layout';
import * as styled from './Details.styled';

const Details = (props: any) => {
    const { _id, name, content, skills } = props.location.state.user;

    return (
        <Layout>
            <h2>The user</h2>

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
