import styles from "../AppHeader.module.scss";
import { links } from "../../../utils/links";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Link to={links.mainpage} className={styles.logo}>
      <Logo />
    </Link>
  );
};

export default HeaderLogo;
