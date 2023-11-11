import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Employees from "../pages/Employees";
import PrivateRouteAlt from "../routesManager/PrivateRouteAlt";
import Login from "../pages/Login";
import PrivateRoute from "../routesManager/PrivateRoute";
import Dashboard from "../pages/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/employees',
        element: <Employees />
      },
      {
        path: '/login',
        element: <PrivateRouteAlt><Login /></PrivateRouteAlt>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>
      }
    ]
  }
])