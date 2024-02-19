import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider'

function DefaultLayout() {
  const {user, token} = useStateContext();

  if (!token) {
    return <Navigate to="/login" />
  }

  const logout = (ev) => {
    ev.preventDefault()
  }
  return (
    <div>
      <header class="header">
        <nav className="navbar">
          <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><Link to='/dashboard'>Dashboard</Link></li>
              <li><a href="#">Reports</a></li>
          </ul>
          <div className="user-actions">
              <div className="notification-icon">
                  <i className="fas fa-bell"></i>
              </div>
              <div>
                  <img className="user-avatar" src="assets/images/avatar-1.jpg" alt="User Avatar" />
              </div>
              {user.name}
              <a href='#' className='btn-logout' onClick={logout}>Logout</a>
          </div>
        </nav>
      </header>
      <section className="sidebar">
        <div className="">
          <img src="assets/images/logo1.png" alt="Company Logo" className="logo" />
        </div>
        <ul className="sidebar-links">
          <li><i className="fas fa-bullseye"></i> <Link to='/dashboard'>Dashboard</Link> </li>
          <li><i className="fas fa-users"></i> <Link to='/users'>Users</Link> </li>
      </ul>
      </section>
      <section className="main">
        <Outlet/>
      </section>
    </div>
  )
}

export default DefaultLayout