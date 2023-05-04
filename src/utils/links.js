import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../pages/Mainapge/Mainpage";
import Login from "../pages/LoginPage/Login/Login";
import Layout from "../components/Layout/Layout";

const links = {
  mainpage: "/",
  login: "/login",
  register: "/register",
  forgot: "/forgot-password",
  reset: "/reset-password",
  profile: "/profile",
  ingredients: "/ingredients",
};

const { mainpage, login, register, forgot, reset, ingredients } = links;

const router = createBrowserRouter([
  {
    path: mainpage,
    element: (
      <Layout>
        <Mainpage />
      </Layout>
    ),
  },
  {
    path: login,
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: register,
    element: <div>register</div>,
  },
  {
    path: forgot,
    element: <div>forgot password</div>,
  },
  {
    path: reset,
    element: <div>reset password</div>,
  },
]);

export { links, router };
