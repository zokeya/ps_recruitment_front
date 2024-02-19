import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import GuestLayout from "./components/layouts/GuestLayout";
import DefaultLayout from "./components/layouts/DefaultLayout";
import Dashboard from "./pages/Dashboard";
import ResetPassword from "./pages/auth/ResetPassword";
import Signup from "./pages/auth/Signup";

const router = createBrowserRouter([
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/reset-pwd',
        element: <ResetPassword />
      },
    ]
  },
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" />
      },
      {
        path: '/users',
        element: <Users />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router;