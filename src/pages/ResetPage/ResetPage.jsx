import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import UtilityText from "../../components/LoginPage/UtilityText/UtilityText";
import { links } from "../../utils/links";

const ResetPage = () => {
  const [email, setEmail] = useState("");

  return (
    <section>
      <form>
        <h4>Восстановление пароля</h4>
        <Input
          type="email"
          placeholder="Укажите e-mail"
          value="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Button
          htmlType="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Восстановить
        </Button>
      </form>
      <UtilityText to={links.login} link="Войти">
        Вспомнили пароль?
      </UtilityText>
    </section>
  );
};

export default ResetPage;
