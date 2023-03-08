import styles from "./ModalWithIngredient.module.scss";
import Modal from "../Modal/Modal";
import ModalDescriptionBox from "../ModalDescriptionBox/ModalDescriptionBox";
import PropTypes from 'prop-types';

const ModalWithIngredient = (props) => {


  return (
    <Modal close={props.close} header={"Детали ингредиента"}>
      <img src={props.data.image_large} alt={props.data.name} />
      <div className={styles.modalbox}>
        <p className="text text_type_main-medium">{props.data.name}</p>
        <ModalDescriptionBox {...props}/>
      </div>
    </Modal>
  );
};

ModalWithIngredient.propTypes = {
  close: PropTypes.func
}

export default ModalWithIngredient;
