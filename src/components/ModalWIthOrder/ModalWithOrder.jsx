import Modal from "../Modal/Modal";
import styles from "./ModalWithOrder.module.scss";
import done from "../../images/graphics.svg";
import PropTypes from "prop-types";

const ModalWithOrder = (props) => {
  return (
    <Modal close={props.close}>
      <div className={styles.box}>
        <p className={`text text_type_digits-large mt-10 mb-8 ${styles.glow}`}>
          034536
        </p>
        <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
        <img src={done} alt="" className="mb-15" />
        <p className="text text_type_main-default mb-2">
          Ваш заказ начали готовить
        </p>
        <p className="text text_type_main-default text_color_inactive mb-15">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </Modal>
  );
};

ModalWithOrder.propTypes = {
  close: PropTypes.func.isRequired,
  header: PropTypes.any,
};

export default ModalWithOrder;
