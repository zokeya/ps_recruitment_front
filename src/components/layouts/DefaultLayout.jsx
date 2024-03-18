import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider'
import Navbar from '../Navbar';

function DefaultLayout() {
  const { user, token } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />
  }

  const logout = (ev) => {
    ev.preventDefault()
  }
  return (
    <div >
      <header>
        <Navbar></Navbar>
      </header>
      <section className="main">
        <Outlet />
      </section>
    </div>
  )
}

export default DefaultLayout
