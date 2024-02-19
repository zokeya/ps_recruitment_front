import React from 'react'

function ResetPassword() {
  const onResetPassword = (ev) => {
    ev.preventDefault()
  }

  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className="form">
        <form onSubmit={onResetPassword}>
          <input type="email" placeholder='Email Address' />
          <button className='btn btn-block'>Reset</button>

          <p className='message'>
            A new password will be sent to your email
          </p>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword