import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.scss";
import HeaderBox from "../HeaderBox/HeaderBox";
import { links } from "../../utils/links";

const Header = () => {

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <HeaderBox to={links.mainpage}>
            <BurgerIcon />
            Конструктор
          </HeaderBox>
          <HeaderBox inactive>
            <ListIcon type="secondary" />
            Лента заказов
          </HeaderBox>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <HeaderBox inactive to={links.login}>
          <ProfileIcon type="secondary" />
          Личный кабинет
        </HeaderBox>
      </nav>
    </header>
  );
};

export default Header;
