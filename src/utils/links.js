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

const links = {
  mainpage: "/",
  login: "/login",
  register: "/register",
  forgot: "forgot-password",
  reset: "reset-password",
  profile: "profile",
  ingredients: "ingredients",
  feed: "feed",
};

const { mainpage, login, register, forgot, reset, ingredients, feed, profile } =
  links;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Mainpage />,
      },
      {
        path: "login",
        element: (
          <ProtectedUnauthorizedRouteElement>
            <Login />
          </ProtectedUnauthorizedRouteElement>
        ),
      },
      {
        path: "register",
        element: (
          <ProtectedUnauthorizedRouteElement>
            <RegistrationPage />
          </ProtectedUnauthorizedRouteElement>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRouteElement>
            <ProfilePage />
          </ProtectedRouteElement>
        ),
      },
      {
        path: "profile/orders",
        element: (
          <ProtectedRouteElement>
            <ProfileHistoryPage />
          </ProtectedRouteElement>
        ),
      },
      {
        path: forgot,
        element: (
          <ProtectedUnauthorizedRouteElement>
            <ForgotPasswordPage />
          </ProtectedUnauthorizedRouteElement>
        ),
      },
      {
        path: reset,
        element: (
          <ProtectedUnauthorizedRouteElement>
            <ResetPasswordPage />
          </ProtectedUnauthorizedRouteElement>
        ),
      },
      {
        path: feed,
        element: <FeedPage />,
      },
      {
        path: `${feed}/:id`,
        element: <OrderInfo />,
      },
      {
        path: `${profile}/orders/:id`,
        element: (
          <ProtectedRouteElement>
            <IngredientInfo />
          </ProtectedRouteElement>
        ),
      },
      {
        path: `${ingredients}/:id`,
        element: <IngredientInfo />,
      },
    ],
  },
]);

export { links, router };
