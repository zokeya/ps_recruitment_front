import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../../context/ContextProvider';
import Navbar from '../Navbar';
import axiosClient from '../../axios-client';

function DefaultLayout() {
  const { user, token, setUser, setToken } = useStateContext();

  const logout = (ev) => {
    ev.preventDefault();

    axiosClient.post('/logout')
      .then(() => {
        setUser({});
        setToken(null);
      });
  };

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <header>
        <Navbar user={user} onLogout={logout} />
      </header>
      <section className="main px-8 py-6">
        <Outlet />
      </section>
    </div>
  );
}

export default DefaultLayout;
