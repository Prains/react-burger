import Modal from "../Modal/Modal";
import styles from "./ModalWithOrder.module.scss";
import done from "../../images/graphics.svg";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderNumber } from "../../services/actions";

const ModalWithOrder = ({ close }) => {
  const { burger } = useSelector((state) => state.burger);
  const { order } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const bunsData = burger.filter((bun) => bun.type === "bun");
  const burgerData = burger.filter((ingredient) => ingredient.type !== "bun");

  const bunsId = bunsData[0]._id;

  useEffect(() => {
    if (burgerData.length !== 0) {
      const ingredientsDataId = [
        bunsId,
        ...burgerData.map((ingredient) => ingredient._id),
        bunsId,
      ];
      dispatch(fetchOrderNumber(ingredientsDataId));
    }
  }, [dispatch]);

  return (
    <Modal close={close}>
      <div className={styles.box}>
        <p className={`text text_type_digits-large mt-10 mb-8 ${styles.glow}`}>
          {order ? order.order.number : ""}
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
