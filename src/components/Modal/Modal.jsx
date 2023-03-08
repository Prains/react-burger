import ModalHeader from "../ModalHeader/ModalHeader";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styles from "./Modal.module.scss";
import PropTypes from 'prop-types';

const Modal = (props) => {
  return (
    <ModalOverlay close={props.close}>
      <div className={styles.modal}>
        <ModalHeader close={props.close} header={props.header} />
        {props.children}
      </div>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  close: PropTypes.func,
  header: PropTypes.string
}

export default Modal;
