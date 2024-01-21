import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Signup } from "./components/auth/signup";
import { Login } from "./components/auth/login";

const router = createBrowserRouter([
  {
    path: "/auth-login",
    element: <Login />,
  },
  {
    path: "/auth-signup",
    element: <Signup />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
