import React from 'react'
import { useRef } from 'react'

const User = () => {

    const email = useRef('');
    const password = useRef('');

    const handleSubmit = (event) => {
        event.preventDefault();
        email.current.value='';
        password.current.value='';
    }


  return (
    <>
        <div>
            <form onSubmit= {handleSubmit}>
                <div>
                <label> <b>Email</b> </label>
                <input type='email' name='email' required ref = {email}></input>
                <label> <b>Password</b> </label>
                <input type='password' name='password' required ref = {password}></input>
                </div>
                <div>
                    <button type='submit' className='btn btn-success'>Submit</button>
                </div>
            </form>

            <p> {email.current.value} - {password.current.value} </p>
        </div>
    </>
  )
}

export default User
