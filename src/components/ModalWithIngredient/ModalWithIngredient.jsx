
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
import IngredientDetails from "./IngredientDetails/IngredientDetails";

const ModalWithIngredient = (props) => {
  return (
    <Modal close={props.close} header={"Детали ингредиента"}>
      <img src={props.data.image_large} alt={props.data.name} />
      <IngredientDetails {...props}/>
    </Modal>
  );
};

ModalWithIngredient.propTypes = {
  close: PropTypes.func.isRequired,
};

export default ModalWithIngredient;
