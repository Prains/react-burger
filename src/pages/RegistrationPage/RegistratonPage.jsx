import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./RegistrationPage.module.scss";
import UtilityText from "../../components/LoginPage/UtilityText/UtilityText";
import { links } from "../../utils/links";
import { useState } from "react";
import api from "../../utils/api";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../services/reducers/User";

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState(false);
  const dispatch = useDispatch();

  return (
    <section className={styles.content}>
      {registered && <Navigate to={links.profile} />}
      <h4 className="text text_type_main-medium mb-6">Регистрация</h4>
      <form className={styles.form}>
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
        <Button
          onClick={(e) => {
            e.preventDefault();
            const user = {
              email: email,
              password: password,
              name: name,
            };
            api
              .makeNewUser(user)
              .then((res) => {
                alert("Успех!");
                dispatch(setUser(res.user));
                setRegistered(true);
              })
              .catch(() => {
                alert(`Пользователь с такими данными уже существует`);
              });
          }}
        >
          Зарегистрироваться
        </Button>
      </form>
      <UtilityText to={links.login} link={"Войти"}>
        Уже зарегистрированы?
      </UtilityText>
    </section>
  );
};

export default RegistrationPage;
