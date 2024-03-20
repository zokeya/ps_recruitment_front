import React from 'react'
import { useCustomHook } from '../context/CustomHooks';
import { BadgeHelp, ChevronUp, FileText, LogOut, Settings, Unplug, User } from 'lucide-react';
import axiosClient from '../axios-client';
import { useStateContext } from '../context/ContextProvider';

import avatarImage from '../assets/images/users/avatar-1.jpg';

function Dashboard() {
  const { user } = useCustomHook();
  const {setUser, setToken} = useStateContext()

  const logout = (ev) => {
    ev.preventDefault();

    axiosClient.post('/logout')
      .then(() => {
        setUser({});
        setToken(null);
      });
  };

  return (
    <div>
      <div className="flex items-center justify-start bg-gray-100">
          <div
          className="w-full max-w-sm rounded-lg bg-white p-3 drop-shadow-xl divide-y divide-gray-200 border-purple-500 mt-2"
        >
          <div aria-label="header" className="flex space-x-4 items-center p-4">
            <div aria-label="avatar" className="flex mr-auto items-center space-x-4">
              <img
                src={avatarImage}
                alt="avatar Evan You"
                className="w-16 h-16 shrink-0 rounded-full"
              />
              <div className="space-y-2 flex flex-col flex-1 truncate">
                <div className="font-medium relative text-xl leading-tight text-blue-900">
                  <span className="flex">
                    <span className="truncate relative pr-8">
                      {user.name}
                      <span
                        aria-label="verified"
                        className="absolute top-1/2 -translate-y-1/2 right-0 inline-block rounded-full"
                      >
                      </span>
                    </span>
                  </span>
                </div>
                <p className="font-normal text-base leading-tight text-blue-500 truncate">
                  {user.email}
                </p>
              </div>
            </div>
            <ChevronUp className="w-6 h-6 text-blue-400 shrink-0" />
          </div>
          <div aria-label="navigation" className="py-2">
            <nav className="grid gap-1">
              <a
                href="/"
                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-blue-600 focus:outline-none hover:bg-gray-100 rounded-md"
              >
                <User className="w-7 h-7"/>

                <span>Account Settings</span>
              </a>
              <a
                href="/"
                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-blue-600 focus:outline-none hover:bg-gray-100 rounded-md"
              >
                <Unplug className="w-7 h-7"/>
                <span>Integrations</span>
              </a>
              <a
                href="/"
                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-blue-600 focus:outline-none hover:bg-gray-100 rounded-md"
              >
                <Settings className="w-7 h-7"/>
                <span>Settings</span>
              </a>
              <a
                href="/"
                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-blue-600 focus:outline-none hover:bg-gray-100 rounded-md"
              >
                <FileText  className='w-7 h-7'/>
                <span>Guide</span>
              </a>
              <a
                href="/"
                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-blue-600 focus:outline-none hover:bg-gray-100 rounded-md"
              >
                <BadgeHelp className='w-7 h-7'/>
                <span>Helper Center</span>
              </a>
            </nav>
          </div>
          <div aria-label="account-upgrade" className="px-4 py-6">
            <div className="flex items-center space-x-3">
              <div className="mr-auto space-y-2">
                <p className="font-medium text-xl text-blue-900 leading-none">
                  Free Plan
                </p>
                <p className="font-normal text-lg text-blue-500 leading-none">
                  12,000 views
                </p>
              </div>
              <button
                type="button"
                className="inline-flex px-6 leading-6 py-3 rounded-md bg-indigo-50 hover:bg-indigo-50/80 transition-colors duration-200 text-indigo-500 font-medium text-lg"
              >
                Upgrade
              </button>
            </div>
          </div>
          <div aria-label="footer" className="pt-2">
            <button onClick={logout}
              type="button"
              className="flex items-center space-x-3 py-3 px-4 w-full leading-6 text-lg text-blue-600 focus:outline-none hover:bg-gray-100 rounded-md"
            >
              <LogOut />
              <span>Logout</span>
            </button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Dashboard