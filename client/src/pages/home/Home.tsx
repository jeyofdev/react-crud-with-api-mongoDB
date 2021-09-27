import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../templates/layout/Layout';
import { UserType } from '../../types';
import * as styled from './Home.styled';
import Loader from '../../atoms/loader/Loader';
import User from '../../molecules/user/User';

const Home = () => {
    const [users, setUsers] = useState<UserType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchUsers = async () => {
        const response = await axios('/api/users');
        setUsers(response.data.result);
        setIsLoading(true);
    };

    useEffect(() => {
        fetchUsers();
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
                                name={user.name}
                                content={user.content}
                                skills={user.skills}
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
        </Layout>
    );
};

export default Home;
