import {
  Button,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Login.module.scss";
import { links } from "../../../utils/links";
import UtilityText from "../../../components/LoginPage/UtilityText/UtilityText";

const Login = () => {
  return (
    <section className={styles.login}>
      <h4 className={`text text_type_main-medium ${styles.title}`}>Вход</h4>
      <div className={styles.content}>
        <EmailInput placeholder="E-mail" />
        <Input placeholder="Пароль" icon={"ShowIcon"} type="password" />
      </div>
      <Button>Войти</Button>
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
