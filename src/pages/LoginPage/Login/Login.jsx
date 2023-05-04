import {
  Button,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Login.module.scss";
import { links } from "../../../utils/links";
import UtilityText from "../../../components/LoginPage/UtilityText/UtilityText";
import { useState } from "react";
import api from "../../../utils/api";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [authorized, setAuthorized] = useState(false);

  return (
    <section className={styles.login}>
      {authorized && <Navigate to={links.mainpage} />}
      <h4 className={`text text_type_main-medium ${styles.title}`}>Вход</h4>
      <form className={styles.content}>
        <EmailInput
          placeholder="E-mail"
          minLength={2}
          maxLength={254}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder="Пароль"
          icon={"ShowIcon"}
          type="password"
          minLength={2}
          maxLength={254}
          value={password}
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
            };
            api
              .authorizeUser(user)
              .then((res) => {
                alert("Успех!");
                setAuthorized(true);
              })
              .catch((res) => {
                alert(
                  `Что-то произошло не так. Попробуйте позже. Код ошибки: ${res.message}`
                );
                setAuthorized(false);
              });
          }}
        >
          Войти
        </Button>
      </form>
      <article className={styles.article}>
        <UtilityText to={links.register} link={"Зарегистрироваться"}>
          Вы - новый пользователь?
        </UtilityText>
        <UtilityText to={links.reset} link={"Восстановить пароль"}>
          Забыли пароль?
        </UtilityText>
      </article>
    </section>
  );
};

export default Login;
