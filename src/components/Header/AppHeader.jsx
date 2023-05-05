import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.scss";
import HeaderBox from "../HeaderBox/HeaderBox";
import { links } from "../../utils/links";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const [profileLink, setProfileLink] = useState();

  useEffect(() => {
    if (user) {
      setProfileLink(links.profile);
    } else {
      setProfileLink(links.login);
    }
  }, [user]);

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
        <HeaderBox to={profileLink}>
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
