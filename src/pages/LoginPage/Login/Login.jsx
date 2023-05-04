import {
  Button,
  EmailInput,
  Input,
  ShowIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className={styles.login}>
      <h4 className={`text text_type_main-medium ${styles.title}`}>Вход</h4>
      <div className={styles.content}>
        <EmailInput placeholder="E-mail" />
        <Input placeholder="Пароль" icon={ShowIcon} />
      </div>
      <Button>Войти</Button>
      <article>
        <p>
          <Link></Link>
        </p>
        <p>
          <Link></Link>
        </p>
      </article>
    </section>
  );
};

export default Login;
