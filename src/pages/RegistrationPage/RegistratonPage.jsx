import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./RegistrationPage.module.scss";
import UtilityText from "../../components/LoginPage/UtilityText/UtilityText";
import { links } from "../../utils/links";

const RegistrationPage = () => {
  return (
    <section className={styles.content}>
      <h4 className="text text_type_main-medium mb-6">Регистрация</h4>
      <form className={styles.form}>
        <Input type="name" placeholder="Имя" />
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Пароль" icon="ShowIcon" />
        <Button>Зарегистрироваться</Button>
      </form>
      <UtilityText to={links.login} link={"Войти"}>
        Уже зарегистрированы?
      </UtilityText>
    </section>
  );
};

export default RegistrationPage;
