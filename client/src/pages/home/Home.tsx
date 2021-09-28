import { useEffect, useState } from 'react';
import Layout from '../../templates/layout/Layout';
import { UserType } from '../../types';
import * as styled from './Home.styled';
import Loader from '../../atoms/loader/Loader';
import User from '../../molecules/user/User';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../utils/request';
import { notifySuccess } from '../../utils/notification';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = (props: any) => {
    const [users, setUsers] = useState<UserType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const deleteUser = (userName: string) => {
        setUsers(users.filter((user) => user.name !== userName));
    };

    useEffect(() => {
        if (props.location.state) {
            if (
                props.location.state.notif.type === 'success' ||
                props.location.state.notif.type === 'error'
            ) {
                notifySuccess(props.location.state.notif.message);
            }
        }

        getAllUsers(setUsers, setIsLoading);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout>
            <h2>The users List</h2>

            <styled.Section>
                {isLoading ? (
                    users.length > 0 ? (
                        users.map((user) => (
                            <User
                                key={user._id}
                                _id={user._id}
                                name={user.name}
                                content={user.content}
                                skills={user.skills}
                                onDelete={deleteUser}
                            />
                        ))
                    ) : (
                        <styled.NoWilders>
                            Aucun wilder pour le moment
                        </styled.NoWilders>
                    )
                ) : (
                    <Loader />
                )}
            </styled.Section>

            <Link
                to="/users/create"
                className="btn-link"
                style={{ marginTop: '2rem' }}
            >
                Add an user
            </Link>

            <ToastContainer position="bottom-right" />
        </Layout>
    );
};

export default Home;
