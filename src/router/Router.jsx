import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Employees from "../pages/Employees";
import PrivateRouteAlt from "../routesManager/PrivateRouteAlt";
import Login from "../pages/Login";
import PrivateRoute from "../routesManager/PrivateRoute";
import Dashboard from "./Dashboard";
import DashboardHome from "../pages/dashboard/DashboardHome";
import DashboardEmployees from "../pages/dashboard/DashboardEmployees";
import DashboardTeam from "../pages/dashboard/DashboardTeam";
import EmployeeAdd from "../pages/dashboard/EmployeeAdd";
import EmployeeUpdate from "../pages/dashboard/EmployeeUpdate";
import TeamMemberUpdate from "../pages/dashboard/TeamMemberUpdate";
import EmployeeDetails from "../pages/EmployeeDetails";
import TeamMemberDetails from "../pages/TeamMemberDetails";
import ChairmanDetails from "../pages/ChairmanDetails";
import ChairmanUpdate from "../pages/dashboard/ChairmanUpdate";

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
        path: '/chairman',
        element: <ChairmanDetails />
      },
      {
        path: '/employees/:id',
        element: <EmployeeDetails />
      },
      {
        path: '/team/:id',
        element: <TeamMemberDetails />
      },
      {
        path: '/login',
        element: <PrivateRouteAlt><Login /></PrivateRouteAlt>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/dashboard/home',
        element: <PrivateRoute><DashboardHome /></PrivateRoute>
      },
      {
        path: '/dashboard/employees',
        element: <PrivateRoute><DashboardEmployees /></PrivateRoute>
      },
      {
        path: '/dashboard/team',
        element: <PrivateRoute><DashboardTeam /></PrivateRoute>
      },
      {
        path: '/dashboard/employees/add',
        element: <PrivateRoute><EmployeeAdd /></PrivateRoute>
      },
      {
        path: '/dashboard/employees/update/:id',
        element: <PrivateRoute><EmployeeUpdate /></PrivateRoute>
      },
      {
        path: '/dashboard/team/update/:id',
        element: <PrivateRoute><TeamMemberUpdate /></PrivateRoute>
      },
      {
        path: '/dashboard/chairman/update/:id',
        element: <PrivateRoute><ChairmanUpdate /></PrivateRoute>
      }
    ]
  }
])