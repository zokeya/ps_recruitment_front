import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const onLogin = (ev) => {
    ev.preventDefault()
  }

  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className="form">
        <form onSubmit={onLogin}>
          <h1 className="title">Login to your account</h1>

          <input type="text" placeholder='User Name' />
          <input type="password" placeholder='Password' />
          <button className='btn btn-block'>Login</button>

          <p className='message'>
            Forgot password? <Link to='/reset-pwd'>Reset</Link>
          </p>
          <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login