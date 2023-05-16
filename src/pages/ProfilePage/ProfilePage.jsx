import styles from "./ProfilePage.module.scss";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import api from "../../utils/api";
import { useSelector, useDispatch } from "react-redux";
import ProfileRoutes from "./ProfileRoutes/ProfileRoutes";
import token from "../../utils/token";
import { setUser } from "../../services/reducers/User";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  return (
    <section className={styles.content}>
      <article className={styles.navigation}>
        <ProfileRoutes />
      </article>
      <form
        className={styles.inputs}
        onReset={(e) => {
          e.preventDefault();
          setName(user.name);
          setEmail(user.email);
          setPassword("");
          setIsEditing(false);
        }}
        onSubmit={(e) => {
          e.preventDefault();
          const editedUser = {
            email: email,
            name: name,
            password: password,
          };
          const access = token.getAccesToken();
          api
            .editUserData(access, editedUser)
            .then((res) => {
              dispatch(setUser(res.user));
              setName(res.user.name);
              setEmail(res.user.email);
              setPassword("");
              setIsEditing(false);
            })
            .catch(() => {
              alert("Произошла какая-то ошибка");
            });
        }}
      >
        <Input
          type="text"
          minLength={2}
          maxLength={254}
          value={name}
          required
          placeholder="Имя"
          icon="EditIcon"
          onChange={(e) => {
            setIsEditing(true);
            setName(e.target.value);
          }}
        />
        <Input
          type="email"
          placeholder="Логин"
          minLength={2}
          maxLength={254}
          required
          value={email}
          icon="EditIcon"
          onChange={(e) => {
            setIsEditing(true);
            setEmail(e.target.value);
          }}
        />
        <Input
          type="password"
          minLength={2}
          maxLength={254}
          required
          value={password}
          placeholder="Пароль"
          icon="EditIcon"
          onChange={(e) => {
            setIsEditing(true);
            setPassword(e.target.value);
          }}
        />
        {isEditing && (
          <div className={styles.bottom}>
            <Button htmlType="reset" type="secondary">
              Отмена
            </Button>
            <Button htmlType="submit">Сохранить</Button>
          </div>
        )}
      </form>
    </section>
  );
};

export default ProfilePage;
