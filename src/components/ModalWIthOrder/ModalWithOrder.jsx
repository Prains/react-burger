import Modal from "../Modal/Modal";
import styles from "./ModalWithOrder.module.scss";
import done from "../../images/graphics.svg";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import {
  ApiClassContext,
  BurgerIngredientsContext,
} from "../../services/Context";

const ModalWithOrder = ({ close }) => {
  const api = useContext(ApiClassContext);
  const burgerIngredients = useContext(BurgerIngredientsContext);
  const [orderNumber, setOrderNumber] = useState(null);

  const bunsData = burgerIngredients.filter((bun) => bun.type === "bun");
  const ingredientsData = burgerIngredients.filter(
    (ingredient) => ingredient.type !== "bun"
  );

  const bunsId = bunsData[0]._id;

  const ingredientsDataId = [bunsId];

  ingredientsData.forEach((ingredient) =>
    ingredientsDataId.push(ingredient._id)
  );
  ingredientsDataId.push(bunsId);

  useEffect(() => {
    api
      .postOrderData(ingredientsDataId)
      .then((res) => setOrderNumber(res.order.number));
  }, []);

  return (
    <Modal close={close}>
      <div className={styles.box}>
        <p className={`text text_type_digits-large mt-10 mb-8 ${styles.glow}`}>
          {orderNumber}
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
