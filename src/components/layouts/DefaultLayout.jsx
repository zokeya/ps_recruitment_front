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
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar user={user} onLogout={logout} />
      </header>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default DefaultLayout;
