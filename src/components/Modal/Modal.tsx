import React from "react";
import { createPortal } from "react-dom";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styles from "./Modal.module.scss";

interface ModalProps {
  close: () => void;
  header?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ close, header, children }) => {
  const modal = document.querySelector("#modal");

  return createPortal(
    <ModalOverlay close={close}>
      <div className={styles.modal}>
        <ModalHeader close={close} header={header} />
        {children}
      </div>
    </ModalOverlay>,
    modal as Element
  );
};

export default Modal;
