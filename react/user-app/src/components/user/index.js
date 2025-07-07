import React from 'react'
import { useRef } from 'react'

const User = () => {

    const email = useRef(null);
    const password = useRef(null);
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email.current.value);   
        console.log(password.current.value);
        formRef.current.reset();
    }


  return (
    <>
        <div>
            <form onSubmit= {handleSubmit} ref= {formRef}>
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

        </div>
    </>
  )
}

export default User
