import React from "react";
import styles from "./IngredientDetails.module.scss";
import ModalDescriptionBox from "../../ModalDescriptionBox/ModalDescriptionBox";

interface IngredientDetailsProps {
  image_large: string;
  name: string;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
}

const IngredientDetails: React.FC<IngredientDetailsProps> = (props) => {
  return (
    <>
      <img src={props.image_large} alt={props.name} />
      <div className={styles.modalbox}>
        <p className="text text_type_main-medium">{props.name}</p>
        <ModalDescriptionBox {...props} />
      </div>
    </>
  );
};

export default IngredientDetails;
