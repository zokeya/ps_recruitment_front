import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider'

function GuestLayout() {
  const {token} = useStateContext();
  const {user} = useStateContext();

  if (token) {
    if (user.role === 'Applicant') {
      return <Navigate to='/' />
    }else{
      return <Navigate to='/dashboard' />
    }
  }

  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default GuestLayout