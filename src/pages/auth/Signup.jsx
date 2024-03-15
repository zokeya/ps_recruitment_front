import React, { useRef, useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../context/ContextProvider';

function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const {setUser, setToken} = useStateContext();
  const [errors, setErrors] = useState();

  const navigate = useNavigate();

  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
      user_role_id: 2
    }

    axiosClient.post('/signup', payload)
      .then(
        ({data}) => {
          setUser(data.user);
          setToken(data?.access_token);
          console.log('session token',data)
        }

      )
      .catch( err => {
        const response = err.response;

        if (response) {
          setErrors(response?.data)
          console.log('errors',errors.detail)

        }
      })
  }

  return (
      <form onSubmit={onSubmit}>
        <h1 className='title'>Signup for more</h1>
        {
          errors && <div>
            {/* {Object.keys(errors).map((msg, i)=>(<p key={i}>{msg}</p>))} */}
            {Object.keys(errors).map(key => (<p>{errors[key][0]}</p>))}
          </div>
        }
        <input ref={nameRef} type="text" placeholder='Full Name'/>
        <input ref={emailRef} type="email" placeholder='Email Address'/>
        <input ref={passwordRef} type="password" placeholder='Password'/>
        <input ref={passwordConfirmationRef} type="password" placeholder='Confirm Password'/>
        <button className='btn btn-block'>Signup</button>
        <p className='message'>
          Already Registered? <Link to='/login'>Sign in</Link>
        </p>
      </form>
  )
}

export default Signup