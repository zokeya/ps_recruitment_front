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
    <>
    <section className="flex justify-center items-center h-screen bg-gray-100">
        <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
              Signup for more
            </h2>
          </div>
            <form onSubmit={onSubmit}>
              {
                errors && <div>
                  {Object.keys(errors).map(key => (<p>{errors[key][0]}</p>))}
                </div>
              }
              <div>
                <input ref={nameRef} type="text" placeholder="Full Name"
                  className="mb-2 w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"  />

                <input ref={emailRef} type="email" placeholder="Email"
                  className="mb-2 w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"  />

                <input ref={passwordRef} type="password" placeholder="Password"
                  className="mb-2 w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"  />

                <input ref={passwordConfirmationRef} type="password" placeholder="Confirm Password"
                  className="mb-2 w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"  />
              </div>

              <div>
                  <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Sign Up
                  </button>
              </div>
              <div className="flex items-center justify-between mt-2">
                      <label for="comments" className="text-sm font-normal text-gray-600">Already Registered?</label>

                    <Link className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500' to='/login'>Sign in</Link>

              </div>
            </form>

        </div>
    </section>
    </>
  )
}

export default Signup