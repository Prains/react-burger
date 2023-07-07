import React from "react";
import ModalDescriptionItem from "../ModalDescriptionItem/ModalDescriptionItem";
import styles from "./ModalDescriptionBox.module.scss";

interface ModalDescriptionBoxProps {
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
}

const ModalDescriptionBox: React.FC<ModalDescriptionBoxProps> = ({
  calories,
  proteins,
  fat,
  carbohydrates,
}) => {
  return (
    <div className={styles.box}>
      <ModalDescriptionItem data={calories}>Калории, ккал</ModalDescriptionItem>
      <ModalDescriptionItem data={proteins}>Белки, г</ModalDescriptionItem>
      <ModalDescriptionItem data={fat}>Жиры, г</ModalDescriptionItem>
      <ModalDescriptionItem data={carbohydrates}>
        Углеводы, г
      </ModalDescriptionItem>
    </div>
  );
};

export default ModalDescriptionBox;
