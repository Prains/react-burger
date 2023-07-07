import { useSelector } from "react-redux";
import { links } from "../../utils/links";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRouteElement = ({ children }: { children: React.ReactNode }) => {
  const { user, status } = useSelector((state: any) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && status === "resolved") {
      navigate(`/${links.login}`);
    }
  }, [user, navigate, status]);

  return <>{children}</>;
};

export default ProtectedRouteElement;
