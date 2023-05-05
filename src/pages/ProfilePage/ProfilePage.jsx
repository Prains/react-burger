import styles from "./ProfilePage.module.scss";
import { links } from "../../utils/links";
import ProfileLink from "../../components/ProfilePage/ProfileLink/ProfileLink";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import token from "../../utils/token";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <section className={styles.content}>
      <article className={styles.navigation}>
        <ProfileLink to={links.profile}>Профиль</ProfileLink>
        <ProfileLink to={links.mainpage}>История заказов</ProfileLink>
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
      </article>
      <article className={styles.inputs}>
        <Input
          type="text"
          minLength={2}
          maxLength={254}
          value={name}
          required
          placeholder="Имя"
          icon="EditIcon"
        />
        <Input
          type="email"
          placeholder="Логин"
          minLength={2}
          maxLength={254}
          required
          value={email}
          icon="EditIcon"
        />
        <Input
          type="password"
          minLength={2}
          maxLength={254}
          required
          value={password}
          placeholder="Пароль"
          icon="EditIcon"
        />
      </article>
    </section>
  );
};

export default ProfilePage;
