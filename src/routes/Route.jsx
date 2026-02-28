import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import ErrorPage from "../pages/ErrorPAge";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardLayout />,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);
