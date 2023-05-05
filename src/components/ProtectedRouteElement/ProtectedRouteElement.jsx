import { useSelector } from "react-redux";
import { links } from "../../utils/links";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRouteElement = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(links.mainpage);
    }
  }, [user, navigate]);

  return <>{children}</>;
};

export default ProtectedRouteElement;
