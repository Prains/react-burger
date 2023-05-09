import { Link } from "react-router-dom";
import styles from "./UtilityText.module.scss";

const UtilityText = ({ children, to, link }) => {
  return (
    <p
      className={`${styles.text} text text_type_main-default text_color_inactive`}
    >
      {children}
      <Link to={to} className={styles.link}>{link}</Link>
    </p>
  );
};

export default UtilityText;
