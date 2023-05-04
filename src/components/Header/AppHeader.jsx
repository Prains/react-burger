import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.scss";
import HeaderBox from "../HeaderBox/HeaderBox";
import { links } from "../../utils/links";
import HeaderLogo from "./HeaderLogo/HeaderLogo";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <HeaderBox to={links.mainpage}>
            {({ isActive }) => (
              <>
                <BurgerIcon type={`${isActive ? "" : "secondary"}`} />
                Конструктор
              </>
            )}
          </HeaderBox>
          <HeaderBox to={links.feed}>
            {({ isActive }) => (
              <>
                <ListIcon type={`${isActive ? "" : "secondary"}`} />
                Лента заказов
              </>
            )}
          </HeaderBox>
        </div>
        <HeaderLogo />
        <HeaderBox to={links.login}>
          {({ isActive }) => (
            <>
              <ProfileIcon type={`${isActive ? "" : "secondary"}`} />
              Личный кабинет
            </>
          )}
        </HeaderBox>
      </nav>
    </header>
  );
};

export default Header;
