import styles from "./HeaderBox.module.scss";
import PropTypes from "prop-types";
const HeaderBox = (props) => {
  return (
    <a
      className={`pt-4 pb-4 pl-5 pr-5 ${
        styles.box
      } text text_type_main-default ${props.inactive ? styles.yes : ""}`}
      href="/"
    >
      {props.children}
    </a>
  );
};

HeaderBox.propTypes = {
  inactive: PropTypes.bool,
};

export default HeaderBox;
