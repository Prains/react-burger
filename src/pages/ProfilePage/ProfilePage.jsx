import styles from "./ProfilePage.module.scss";
import { links } from "../../utils/links";
import ProfileLink from "../../components/ProfilePage/ProfileLink/ProfileLink";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";

const ProfilePage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <section className={styles.content}>
      <article className={styles.navigation}>
        <ProfileLink to={links.profile}>Профиль</ProfileLink>
        <ProfileLink to={links.mainpage}>История заказов</ProfileLink>
        <ProfileLink to={links.mainpage}>Выход</ProfileLink>
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
