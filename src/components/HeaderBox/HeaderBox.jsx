import styles from "./HeaderBox.module.scss";

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

export default HeaderBox;
