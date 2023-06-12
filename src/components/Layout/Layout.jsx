import { Outlet } from "react-router-dom";
import Header from "../Header/AppHeader";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
