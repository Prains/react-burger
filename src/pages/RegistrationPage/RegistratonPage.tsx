import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./RegistrationPage.module.scss";
import UtilityText from "../../components/LoginPage/UtilityText/UtilityText";
import { links } from "../../utils/links";
import api from "../../utils/api";
import { setUser } from "../../services/reducers/User";

const RegistrationPage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [registered, setRegistered] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
      name: name,
    };
    api
      .makeNewUser(user)
      .then((res) => {
        console.log(res);
        alert("Успех!");
        dispatch(setUser(res.user));
        setRegistered(true);
      })
      .catch((res) => {
        console.log(res);
        alert(`Пользователь с такими данными уже существует`);
      });
  };

  if (registered) {
    return <Navigate to={links.profile} />;
  }

  return (
    <section className={styles.content}>
      <h4 className="text text_type_main-medium mb-6">Регистрация</h4>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Имя"
          minLength={2}
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          type="email"
          placeholder="E-mail"
          minLength={2}
          maxLength={254}
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="Пароль"
          icon="ShowIcon"
          value={password}
          minLength={2}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button htmlType="submit">Зарегистрироваться</Button>
      </form>
      <UtilityText to={`/${links.login}`} link={"Войти"}>
        Уже зарегистрированы?
      </UtilityText>
    </section>
  );
};

export default RegistrationPage;
