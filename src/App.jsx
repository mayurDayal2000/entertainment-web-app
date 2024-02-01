import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "@auth/login";
import { Signup } from "@auth/signup";
import { Dashboard } from "@dashboard/dashboard";
import { DashboardMovies } from "@dashboard/dashboardMovies";
import { DashboardTV } from "@dashboard/dashboardTV";
import { DashboardBookmark } from "@dashboard/dashboardBookmark";

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
  {
    path: "*",
    element: (
      <Navigate
        to="/dashboard"
        replace
      />
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
