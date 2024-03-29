import React, { useState, FormEvent } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import UtilityText from "../../components/LoginPage/UtilityText/UtilityText";
import { links } from "../../utils/links";
import styles from "./ForgotPasswordPage.module.scss";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    api
      .resetPassword(email)
      .then((res) => {
        alert("Письмо с кодом восстановления успешно отправлено!");
        navigate(`/${links.reset}?from=forgot-password`);
      })
      .catch((res) => alert("Почта не найдена"));
  };

  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h4 className="text text_type_main-medium">Восстановление пароля</h4>
        <Input
          type="email"
          placeholder="Укажите e-mail"
          value={email}
          minLength={2}
          maxLength={254}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Button htmlType="submit">Восстановить</Button>
      </form>
      <UtilityText to={`/${links.login}`} link="Войти">
        Вспомнили пароль?
      </UtilityText>
    </section>
  );
};

export default ForgotPasswordPage;
