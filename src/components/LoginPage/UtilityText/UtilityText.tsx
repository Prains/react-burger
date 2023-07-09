import React from "react";
import { Link } from "react-router-dom";
import styles from "./UtilityText.module.scss";

interface UtilityTextProps {
  to: string;
  link: string;
  children: React.ReactNode;
}

const UtilityText: React.FC<UtilityTextProps> = ({ to, link, children }) => {
  return (
    <p
      className={`${styles.text} text text_type_main-default text_color_inactive`}
    >
      {children}
      <Link to={to} className={styles.link}>
        {link}
      </Link>
    </p>
  );
};

export default UtilityText;
