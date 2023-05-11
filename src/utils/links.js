import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../pages/Mainapge/Mainpage";
import Login from "../pages/LoginPage/Login/Login";
import Layout from "../components/Layout/Layout";
import RegistrationPage from "../pages/RegistrationPage/RegistratonPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ProtectedRouteElement from "../components/ProtectedRouteElement/ProtectedRouteElement";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";
import ProtectedUnauthorizedRouteElement from "../components/ProtectedRouteElement/ProtectedUnauthorizedRouteElement";
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage";
import IngredientInfo from "../pages/IngredientInfo/IngredientInfo";
import FeedPage from "../pages/FeedPage/FeedPage";
import OrderInfo from "../pages/OrderInfo/OrderInfo";
import ProfileHistoryPage from "../pages/ProfileHistoryPage/ProfileHistoryPage";
// TODO - ingredientinfo
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

const { mainpage, login, register, forgot, reset, ingredients, feed, profile } =
  links;

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
        <ProtectedUnauthorizedRouteElement>
          <Login />
        </ProtectedUnauthorizedRouteElement>
      </Layout>
    ),
  },
  {
    path: register,
    element: (
      <Layout>
        <ProtectedUnauthorizedRouteElement>
          <RegistrationPage />
        </ProtectedUnauthorizedRouteElement>
      </Layout>
    ),
  },
  {
    path: forgot,
    element: (
      <Layout>
        <ProtectedUnauthorizedRouteElement>
          <ForgotPasswordPage />
        </ProtectedUnauthorizedRouteElement>
      </Layout>
    ),
  },
  {
    path: reset,
    element: (
      <Layout>
        <ProtectedUnauthorizedRouteElement>
          <ResetPasswordPage />
        </ProtectedUnauthorizedRouteElement>
      </Layout>
    ),
  },
  {
    path: feed,
    element: (
      <Layout>
        <FeedPage />
      </Layout>
    ),
  },
  {
    path: `${feed}/:id`,
    element: (
      <Layout>
        <OrderInfo />
      </Layout>
    ),
  },
  {
    path: profile,
    element: (
      <Layout>
        <ProtectedRouteElement>
          <ProfilePage />
        </ProtectedRouteElement>
      </Layout>
    ),
  },
  {
    path: `${profile}/orders`,
    element: (
      <Layout>
        <ProtectedRouteElement>
          <ProfileHistoryPage />
        </ProtectedRouteElement>
      </Layout>
    ),
  },
  {
    path: `${profile}/orders/:id`,
    element: (
      <Layout>
        <ProtectedRouteElement>
          <ProfileHistoryPage />
        </ProtectedRouteElement>
      </Layout>
    ),
  },
  {
    path: `${ingredients}/:id`,
    element: (
      <Layout>
        <IngredientInfo />
      </Layout>
    ),
  },
]);

export { links, router };
