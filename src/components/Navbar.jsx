// Navbar.jsx
import clsx from 'clsx';
import { BellDot, Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './layouts/Logo';

import userAvatar from "../assets/images/users/avatar-1.jpg"
export default function Navbar({ user, onLogout }) {
  const [isSideMenuOpen, setOpenSideMenu] = useState(false);

  const navlinks = [
    {
      label: "Home",
      path: "/dashboard"
    },
    {
      label: "Profile",
      path: "#"
    },
    {
      label: "Jobs",
      path: "#"
    },
    {
      label: "Users",
      path: "/users"
    }
  ]

  return (
    <>
      <nav className="flex items-center justify-between px-8 py-6 ">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <Menu
              onClick={() => setOpenSideMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <Link to={'/'} className="font-mono text-4xl">
              <Logo />
            </Link>
          </section>
          {navlinks.map((d, i) => (
            <Link
              key={i}
              className="hidden text-gray-400 lg:block hover:text-black"
              to={d.path}
            >
              {d.label}
            </Link>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="absolute top-0 left-0 z-50 flex flex-col w-56 h-screen gap-8 p-8 text-black bg-white ">
            <X
              onClick={() => setOpenSideMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((d, i) => (
              <Link key={i} className="font-bold" href={d.path}>
                {d.label}
              </Link>
            ))}
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-4">
          {/* user name */}
          <span>{user.name}</span>
          {/* logout button */}
          <button onClick={onLogout}>Logout</button>
          {/* cart icon */}
          <BellDot className="text-3xl" />
          <img
            width={40}
            height={40}
            className="w-8 h-8 rounded-full "
            src={userAvatar}
            alt="avatar-img"
          />
          {/* avtar img */}
        </section>
      </nav>
      <hr className="" />
    </>
  )
}
