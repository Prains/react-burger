import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ModalHeader.module.scss'
import PropTypes from 'prop-types';


const ModalHeader = (props) => {
  return (
    <p className={`text text_type_main-large ${styles.header}`}>
      {props.header ? props.header : <div></div>}
      <CloseIcon onClick={() => props.close(false)} />
    </p>
  );
};

ModalHeader.propTypes = {
  close: PropTypes.func,
  header: PropTypes.string
}

export default ModalHeader;
