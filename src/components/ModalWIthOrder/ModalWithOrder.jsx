import Modal from "../Modal/Modal";
import styles from "./ModalWithOrder.module.scss";
import done from "../../images/graphics.svg";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../utils/api";
import { setOrder } from "../../services/reducers/Order";

const ModalWithOrder = ({ close }) => {
  const { ingredients } = useSelector((state) => state.ingredients);
  const { order } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const bunsData = ingredients.filter((bun) => bun.type === "bun");
  const ingredientsData = ingredients.filter(
    (ingredient) => ingredient.type !== "bun"
  );

  const bunsId = bunsData[0]._id;

  useEffect(() => {
    const ingredientsDataId = [
      bunsId,
      ...ingredientsData.map((ingredient) => ingredient._id),
      bunsId,
    ];
    api
      .postOrderData(ingredientsDataId)
      .then((res) => dispatch(setOrder(res.order.number)));
  }, [api]);

  return (
    <Modal close={close}>
      <div className={styles.box}>
        <p className={`text text_type_digits-large mt-10 mb-8 ${styles.glow}`}>
          {order}
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
