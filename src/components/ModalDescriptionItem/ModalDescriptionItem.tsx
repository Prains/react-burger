import React from "react";
import styles from "./ModalDescriptionItem.module.scss";

interface ModalDescriptionItemProps {
  data: number;
  children: React.ReactNode;
}

const ModalDescriptionItem: React.FC<ModalDescriptionItemProps> = ({
  children,
  data,
}) => {
  return (
    <p
      className={`text text_type_main-default text_color_inactive ${styles.text}`}
    >
      {children} <span className="text text_type_digits-default">{data}</span>
    </p>
  );
};

export default ModalDescriptionItem;
