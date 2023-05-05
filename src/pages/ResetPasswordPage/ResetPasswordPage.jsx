import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ResetPasswordPage.module.scss";
import { links } from "../../utils/links";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UtilityText from "../../components/LoginPage/UtilityText/UtilityText";
import api from "../../utils/api";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  return (
    <section className={styles.section}>
      <form className={styles.form}>
        <h4 className="text text_type_main-medium">Восстановление пароля</h4>
        <Input
          type="password"
          icon="ShowIcon"
          placeholder="Введите новый пароль"
          minLength={2}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="Введите код из письма"
          minLength={2}
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <Button
          htmlType="submit"
          onClick={(e) => {
            e.preventDefault();
            api
              .createNewPassword(password, code)
              .then((res) => {
                alert("Пароль изменен успешно!");
                navigate(links.login);
              })
              .catch((res) => alert("Неправильный код из письма"));
          }}
        >
          Сохранить
        </Button>
      </form>
      <UtilityText to={links.login} link="Войти">
        Вспомнили пароль?
      </UtilityText>
    </section>
  );
};

export default ResetPasswordPage;
