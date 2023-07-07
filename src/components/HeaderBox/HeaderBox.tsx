import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderBox.module.scss";

interface HeaderBoxProps {
  to: string;
  inactive?: boolean;
  children: any;
}

const HeaderBox: React.FC<HeaderBoxProps> = ({ to, inactive, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `pt-4 pb-4 pl-5 pr-5 ${styles.box} text text_type_main-default ${
          isActive || inactive ? "" : styles.yes
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default HeaderBox;
