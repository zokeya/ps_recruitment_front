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
        const response = err.response;

        if (response) {
          setErrors(response?.data);
        }
      });
  };

  return (
    <form onSubmit={onLogin}>
      <h1 className="title">Login to your account</h1>
      {errors && (
        <div>
          {errors.detail.map((error, i) => (
            <div key={i}>
              <p>{JSON.stringify(error.loc[1])} {error.msg}</p>
            </div>
          ))}
        </div>
      )}

      <input ref={userNameRef} type="text" placeholder="User Name" autoComplete="user-name" />
      <br />
      <input ref={passwordRef} type="password" placeholder="Password" autoComplete="current-password" />
      <button className="btn btn-block">Login</button>

      <p className="message">
        Forgot password? <Link to="/reset-pwd">Reset</Link>
      </p>
      <p className="message">
        Not registered? <Link to="/signup">Create an account</Link>
      </p>
    </form>
  );
}

export default Login;
