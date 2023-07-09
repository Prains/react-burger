import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { links } from "../../utils/links";
import { useAppSelector } from "../../hooks/useReduxHooks";
import { RootState } from '../../services/store';

const ProtectedUnauthorizedRouteElement = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user } = useAppSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(`/${links.profile}`);
    }
  }, [user, navigate]);

  return <>{children}</>;
};

export default ProtectedUnauthorizedRouteElement;
