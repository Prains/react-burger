import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { links } from "../../utils/links";
import { useSelector } from "react-redux";

const ProtectedUnauthorizedRouteElement = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user } = useSelector((state: any) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(`/${links.profile}`);
    }
  }, [user, navigate]);

  return <>{children}</>;
};

export default ProtectedUnauthorizedRouteElement;
