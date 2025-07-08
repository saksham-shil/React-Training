import React, {useState, useEffect} from 'react'
import axios from 'axios'
import UserCard from '../../../components/UserCard';

const UsersList = () => {
    const API_USERS_URL = "https://jsonplaceholder.typicode.com/users";

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setError] = useState(false);

    const getUsers = () => {
        axios.get(API_USERS_URL)
        .then(res => {
            const data = res.data;
            setUsers(data);
            setLoading(false);
            console.log(data);
        })
        .catch(e => {
            setError(true);
            console.log(e);
        });
    }

    useEffect(() => {
        getUsers();
    }, [])

  return (
    <>
        <h1> <b>Users List</b> </h1>
        {isError && <h2> Something went wrong, can't fetch data </h2>}
        {loading && <h2> Loading data.... </h2>}
        <ul className="d-flex flex-wrap list-unstyled gap-5 ">
        {!loading && users.length === 0 && <h2> No data found </h2>}
        {!isError &&
        users?.map(user => (
            <li key = {user.id}>
                <UserCard user = {user} />
            </li>
        ))
        }
        </ul>
    </>
  )
}

export default UsersList
