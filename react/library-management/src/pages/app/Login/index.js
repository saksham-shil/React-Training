import React, { useState } from 'react'
import { setToken } from '../../../redux/reducers/login';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as Yup from 'yup'



const Login = ({}) => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik ({
      initialValues : {
        username : '', password : ''
      }, 
      validationSchema : Yup.object({
        username: Yup.string().required(),
        password:Yup.string().required()
      }),
      onSubmit: (values, { setSubmitting }) => {
            setSubmitting(true); 

            axios.post('http://localhost:8080/login', {
                username: values.username,
                password: values.password
            })
            .then(res => {
                console.log(res.data.token);
                dispatch(setToken(res.data.token));
                navigate('/');
            })
            .catch(e => {
                console.log(e);
                setError("Something went wrong with fetching token")
                setSubmitting(false); 
            })
      }
    })

    // const setLoginToken = (username, password) => {
    //     axios.post(
    //         'http://localhost:8080/login', 
    //         {username, password}
    //     )
    //     .then (res => {
    //         // setError(false);
    //         console.log(res.data.token);
    //         dispatch(setToken(res.data.token))
    //         navigate('/')

    //     })
    //     .catch (e => {
    //         console.log(e);
    //         // setError(true);
    //     })


    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     setLoginToken();
    // }



  return (
        <div>
            <h1> Login </h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='username'> <b>Username: </b></label>
                <input
                    id='username'
                    name='username' 
                    type='text'
                    onChange={formik.handleChange} 
                    value={formik.values.username} 
                />
                {formik.errors.username && <div style={{ color: 'red' }}>{formik.errors.username}</div>}
                <br /><br />

                <label htmlFor='password'> <b>Password: </b></label>
                <input
                    id='password'
                    name='password'
                    type='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password && <div style={{ color: 'red' }}>{formik.errors.password}</div>}

                <div>
                    <button type="submit" className='btn btn-success m-3'>Submit</button>
                </div>
                {error && <p>{error} </p>}
            </form>
        </div>
    );
};

export default Login;