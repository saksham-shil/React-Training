import React, { useState } from 'react'
import { setToken } from '../../../redux/reducers/login';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Login = ({}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const setLoginToken = () => {
        axios.post(
            'http://localhost:8080/login', 
            {username, password}
        )
        .then (res => {
            setError(false);
            console.log(res.data.token);
            dispatch(setToken(res.data.token))
            navigate('/')

        })
        .catch (e => {
            console.log(e);
            setError(true);
        })
    }


    const submitHandler = (e) => {
        e.preventDefault();
        setLoginToken();
    }



  return (
    <div className="login-wrapper">
      <h1> Login </h1>
      <form onSubmit={submitHandler}>
        <label htmlFor='username'> <b>Username: </b></label>
        <input id = 'username' type = 'text'
        value = {username}
        onChange={e => setUsername(e.target.value) }required /> <br></br><br></br>
        <label htmlFor='password'> <b>Password: </b></label>
        <input id = 'password' type='password' 
        value = {password}
        onChange = {e => setPassword(e.target.value)} required / >
        <div>
          <button type="submit" className='btn btn-success m-3'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login
