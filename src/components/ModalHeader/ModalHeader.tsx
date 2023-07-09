import React from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ModalHeader.module.scss";

interface ModalHeaderProps {
  close: () => void;
  header?: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ close, header }) => {
  return (
    <p className={`text text_type_main-large ${styles.header}`}>
      {header ? header : <span></span>}
      <CloseIcon onClick={() => close()} type="primary" />
    </p>
  );
};

export default ModalHeader;
