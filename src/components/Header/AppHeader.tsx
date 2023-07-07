import React, { useEffect, useState } from "react";
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

const Header: React.FC = () => {
  const { user } = useSelector((state: any) => state.user);
  const [profileLink, setProfileLink] = useState<string>("");

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
            {({ isActive }: { isActive: any }) => (
              <>
                <BurgerIcon type={isActive ? "primary" : "secondary"} />
                Конструктор
              </>
            )}
          </HeaderBox>
          <HeaderBox to={links.feed}>
            {({ isActive }: { isActive: any }) => (
              <>
                <ListIcon type={isActive ? "primary" : "secondary"} />
                Лента заказов
              </>
            )}
          </HeaderBox>
        </div>
        <HeaderLogo />
        <HeaderBox to={profileLink}>
          {({ isActive }: { isActive: any }) => (
            <>
              <ProfileIcon type={isActive ? "primary" : "secondary"} />
              Личный кабинет
            </>
          )}
        </HeaderBox>
      </nav>
    </header>
  );
};

export default Header;
