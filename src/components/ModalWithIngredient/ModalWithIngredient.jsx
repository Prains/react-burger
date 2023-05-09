import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
import IngredientDetails from "./IngredientDetails/IngredientDetails";

const ModalWithIngredient = (props) => {
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

ModalWithIngredient.propTypes = {
  close: PropTypes.func.isRequired,
};

export default ModalWithIngredient;
