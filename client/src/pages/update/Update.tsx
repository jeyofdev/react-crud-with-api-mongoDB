import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../molecules/form/Form';
import Layout from '../../templates/layout/Layout';
import { UserType } from '../../types';

const Update = (props: any) => {
    const [user] = useState<UserType>(props.location.state.user);

    return (
        <Layout>
            <Link to="/" className="btn-link" style={{ margin: '1rem 0 ' }}>
                Back to home
            </Link>

            <h2>Update the user {user.name}</h2>

            {user && (
                <Form
                    _id={user._id}
                    name={user.name}
                    content={user.content}
                    skills={user.skills}
                    method="put"
                />
            )}
        </Layout>
    );
};

export default Update;
