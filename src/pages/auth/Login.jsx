import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../context/ContextProvider';

function Login() {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const formData = new FormData();

  const { setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState();

  const onLogin = (ev) => {
    ev.preventDefault();

    formData.append('username', userNameRef.current.value);
    formData.append('password', passwordRef.current.value);

    axiosClient
      .post('/login', formData)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.access_token);
      })
      .catch((err) => {
        console.log(err.response.data)
        const response = err.response;

        if (response && response.status === 403) {
          setErrors({ detail: [{ msg: 'Invalid login credentials' }] });
        } else if (response && response.data && response.data.detail) {
          setErrors(response.data);
        }
      });
  };

  return (
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">Login to your account</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={onLogin} className='space-y-6'>

            {errors && (
              <div>
                {errors.detail.map((error, i) => (
                  <div key={i}>
                    <p>{error.msg}</p>
                  </div>
                ))}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input ref={userNameRef} type="text" autoComplete="user-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <p className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password? <Link to="/reset-pwd">Reset</Link>
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <input ref={passwordRef} type="password" autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
             </div>
            </div>
            <div>
              <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Login
              </button>
            </div>
          </form>
          <p className="mt-10 text-sm text-center text-gray-500">
            Not registered?{' '}
            <Link className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" to="/signup">Create an account</Link>
          </p>
        </div>
    </div>

  );
}

export default Login;
