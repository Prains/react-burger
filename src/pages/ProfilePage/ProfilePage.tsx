import React, { useState, FormEvent } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ProfilePage.module.scss";
import api from "../../utils/api";
import token from "../../utils/token";
import { setUser } from "../../services/reducers/User";
import ProfileRoutes from "./ProfileRoutes/ProfileRoutes";
import { useAppSelector, useAppDispatch } from "../../hooks/useReduxHooks";
import { RootState } from '../../services/store';

const ProfilePage: React.FC = () => {
  const { user } = useAppSelector((state: RootState) => state.user);
  if (!user) return null;
  // eslint-disable-next-line
  const [name, setName] = useState<string>(user?.name);
  // eslint-disable-next-line
  const [email, setEmail] = useState<string>(user?.email);
  // eslint-disable-next-line
  const [password, setPassword] = useState<string>("");
  // eslint-disable-next-line
  const [isEditing, setIsEditing] = useState<boolean>(false);
  // eslint-disable-next-line
  const dispatch = useAppDispatch();

  const handleReset = (e: FormEvent) => {
    e.preventDefault();
    setName(user?.name);
    setEmail(user?.email);
    setPassword("");
    setIsEditing(false);
  };

  const handleSubmit = (e: FormEvent) => {
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
  };

  return (
    <section className={styles.content}>
      <article className={styles.navigation}>
        <ProfileRoutes />
      </article>
      <form
        className={styles.inputs}
        onReset={handleReset}
        onSubmit={handleSubmit}
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
