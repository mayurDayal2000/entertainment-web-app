import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Signup } from "./components/auth/signup";
import { Login } from "./components/auth/login";
import { Navbar } from "./components/dashboard/navbar";

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
    element: <Navbar />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
