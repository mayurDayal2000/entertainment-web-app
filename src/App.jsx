import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Signup } from "./components/auth/signup";
import { Login } from "./components/auth/login";
import { Dashboard } from "./components/dashboard/dashboard";
import { DashboardMovies } from "./components/dashboard/dashboardMovies";
import { DashboardTV } from "./components/dashboard/dashboardTV";
import { DashboardBookmark } from "./components/dashboard/dashboardBookmark";

const router = createBrowserRouter([
  {
    path: "/auth-login",
    element: <Login />,
  },
  {
    path: "/auth-signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/movies",
    element: <DashboardMovies />,
  },
  {
    path: "/dashboard/tv-series",
    element: <DashboardTV />,
  },
  {
    path: "/dashboard/bookmarks",
    element: <DashboardBookmark />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
