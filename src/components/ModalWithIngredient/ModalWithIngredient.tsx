import React from "react";
import Modal from "../Modal/Modal";
import IngredientDetails from "./IngredientDetails/IngredientDetails";
import { Ingredient } from "../../utils/types";

type ModalWithIngredientProps = Ingredient & {
  close: Function;
};

const ModalWithIngredient: React.FC<ModalWithIngredientProps> = (props) => {
  return (
    <Modal
      close={() => {
        props.close();
        window.history.back();
      }}
      header={"Детали ингредиента"}
    >
      <IngredientDetails {...props} />
    </Modal>
  );
};

export default ModalWithIngredient;
