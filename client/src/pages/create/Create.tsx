import { Link } from 'react-router-dom';
import Form from '../../molecules/form/Form';
import Layout from '../../templates/layout/Layout';

const Create = () => {
    return (
        <Layout>
            <Link to="/" className="btn-link" style={{ margin: '1rem 0 ' }}>
                Back to home
            </Link>

            <h2>Add a new user</h2>

            <Form _id="" name="" content="" skills={[]} method="post" />
        </Layout>
    );
};

export default Create;
