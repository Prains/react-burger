import styles from "./HeaderBox.module.scss";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const HeaderBox = (props) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        `pt-4 pb-4 pl-5 pr-5 ${styles.box} text text_type_main-default ${
          isActive ? "" : styles.yes
        }`
      }
      href="/"
    >
      {props.children}
    </NavLink>
  );
};

HeaderBox.propTypes = {
  inactive: PropTypes.bool,
  to: PropTypes.string,
};

export default HeaderBox;
