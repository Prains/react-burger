import styles from './HeaderBox.module.scss'

const HeaderBox = (props) => {
  return <p className={`pt-4 pb-4 pl-5 pr-5 ${styles.box} text text_type_main-default ${props.inactive ? styles.yes : ''}`}>{props.children}</p>;
};

export default HeaderBox;
