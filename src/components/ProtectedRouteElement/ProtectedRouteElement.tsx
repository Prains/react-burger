import { useAppSelector } from "../../hooks/useReduxHooks";
import { links } from "../../utils/links";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { RootState } from '../../services/store';

const ProtectedRouteElement = ({ children }: { children: React.ReactNode }) => {
  const { user, status } = useAppSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && status === "resolved") {
      navigate(`/${links.login}`);
    }
  }, [user, navigate, status]);

  return <>{children}</>;
};

export default ProtectedRouteElement;
