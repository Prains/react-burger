import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import UtilityText from "../../components/LoginPage/UtilityText/UtilityText";
import api from "../../utils/api";
import { links } from "../../utils/links";
import styles from "./ResetPasswordPage.module.scss";

const ResetPasswordPage: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from");

  useEffect(() => {
    if (from !== "forgot-password") {
      navigate(links.login);
    }
  }, [navigate, from]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api
      .createNewPassword(password, code)
      .then((res) => {
        alert("Пароль изменен успешно!");
        navigate(`/${links.login}`);
      })
      .catch((res) => alert("Неправильный код из письма"));
  };

  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <h4 className="text text_type_main-medium">Восстановление пароля</h4>
        <Input
          type="password"
          icon="ShowIcon"
          placeholder="Введите новый пароль"
          minLength={2}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Введите код из письма"
          minLength={2}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Button type="primary" htmlType="submit">
          Сохранить
        </Button>
      </form>
      <UtilityText to={`/${links.login}`} link="Войти">
        Вспомнили пароль?
      </UtilityText>
    </section>
  );
};

export default ResetPasswordPage;
