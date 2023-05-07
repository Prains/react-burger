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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../services/reducers/User";
import token from "../../../utils/token";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className={styles.login}>
      <h4 className={`text text_type_main-medium ${styles.title}`}>Вход</h4>
      <form
        className={styles.content}
        onSubmit={(e) => {
          e.preventDefault();
          const user = {
            email: email,
            password: password,
          };
          api
            .authorizeUser(user)
            .then((res) => {
              token.setAccessToken(res.accessToken);
              token.setRefreshToken(res.refreshToken);
              dispatch(setUser(res.user));
              alert("Успех!");
              navigate(links.profile);
            })
            .catch((res) => {
              alert(
                `Что-то произошло не так. Попробуйте позже. Код ошибки: ${res.message}`
              );
            });
        }}
      >
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
        <Button htmlType="submit">Войти</Button>
      </form>
      <article className={styles.article}>
        <UtilityText to={links.register} link={"Зарегистрироваться"}>
          Вы - новый пользователь?
        </UtilityText>
        <UtilityText to={links.forgot} link={"Восстановить пароль"}>
          Забыли пароль?
        </UtilityText>
      </article>
    </section>
  );
};

export default Login;
