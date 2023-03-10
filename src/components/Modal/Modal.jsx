import ModalHeader from "../ModalHeader/ModalHeader";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styles from "./Modal.module.scss";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const Modal = (props) => {
  const modal = document.querySelector("#modal");

  return createPortal(
    <ModalOverlay close={props.close}>
      <div className={styles.modal}>
        <ModalHeader close={props.close} header={props.header} />
        {props.children}
      </div>
    </ModalOverlay>,
    modal
  );
};

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  header: PropTypes.string,
};

export default Modal;
