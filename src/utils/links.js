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
  feed: "/feed",
};

const { mainpage, login, register, forgot, reset, ingredients, feed } = links;

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
    element: (
      <Layout>
        <div>register</div>
      </Layout>
    ),
  },
  {
    path: forgot,
    element: (
      <Layout>
        <div>forgot password</div>
      </Layout>
    ),
  },
  {
    path: reset,
    element: (
      <Layout>
        <div>reset password</div>
      </Layout>
    ),
  },
  {
    path: feed,
    element: (
      <Layout>
        <div>feed</div>
      </Layout>
    ),
  },
]);

export { links, router };
