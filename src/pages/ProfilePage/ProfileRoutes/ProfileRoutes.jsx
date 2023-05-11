import { useNavigate } from "react-router-dom";
import token from "../../../utils/token";
import api from "../../../utils/api";
import ProfileLink from "../../../components/ProfilePage/ProfileLink/ProfileLink";
import { links } from "../../../utils/links";

const ProfileRoutes = () => {
  const navigate = useNavigate();

  return (
    <>
      <ProfileLink to={links.profile} end>
        Профиль
      </ProfileLink>
      <ProfileLink to={`${links.profile}/orders`}>История заказов</ProfileLink>
      <p
        className="text text_type_main-medium text_color_inactive pointer"
        onClick={() => {
          const access = token.getRefreshToken();
          api.logOut(access).then(() => {
            token.logOut();
            alert("Вы успешно вышли");
            navigate(links.mainpage);
            window.location.reload();
          });
        }}
      >
        Выход
      </p>
      <p className="mt-20 text text_type_main-default text_color_inactive">
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </>
  );
};

export default ProfileRoutes;
