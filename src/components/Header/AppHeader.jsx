import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.scss";
import HeaderBox from "../HeaderBox/HeaderBox";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <HeaderBox>
            <BurgerIcon />
            Конструктор
          </HeaderBox>
          <HeaderBox inactive='yes'>
            <ListIcon type="secondary"/>
            Лента заказов
          </HeaderBox>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <HeaderBox inactive='yes'>
          <ProfileIcon type="secondary" />
          Личный кабинет
        </HeaderBox>
      </nav>
    </header>
  );
};

export default Header;
