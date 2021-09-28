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
import SelectInput from '../../atoms/form/select/Select';
import { filterOptionsDatas } from '../../datas/formDatas';

const Home = (props: any) => {
    const [users, setUsers] = useState<UserType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isReload, setIsReload] = useState<boolean>(false);

    const deleteUser = (userName: string) => {
        setUsers(users.filter((user) => user.name !== userName));
    };

    const handleChange = (option: any) => {
        switch (option.value) {
            case 'name_asc':
                setUsers(
                    users.sort((a, b) => {
                        return a.name < b.name ? -1 : 1;
                    })
                );
                break;
            case 'name_desc':
                setUsers(
                    users.sort((a, b) => {
                        return a.name > b.name ? -1 : 1;
                    })
                );
                break;
            case 'recently-created':
                setUsers(
                    users.sort((a, b) => {
                        return a._id > b._id ? -1 : 1;
                    })
                );
                break;

            default:
                break;
        }

        setIsReload(!isReload);
    };

    useEffect(() => {}, [isReload]);

    useEffect(() => {
        if (props.location.state) {
            if (
                props.location.state.notif.type === 'success' ||
                props.location.state.notif.type === 'error'
            ) {
                notifySuccess(props.location.state.notif.message);
            }
        }

        if (isLoading) {
            getAllUsers(setUsers, setIsLoading);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout>
            <styled.Header>
                <h2>The users List</h2>

                <SelectInput
                    options={filterOptionsDatas}
                    handleChange={handleChange}
                />
            </styled.Header>

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
