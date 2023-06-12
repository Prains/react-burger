import styles from "./OrderDetails.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderNumber } from "../../../services/actions";
import done from "../../../images/graphics.svg";

const OrderDetails = () => {
  const { burger } = useSelector((state) => state.burger);
  const { order } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const bunsData = burger.filter((bun) => bun.type === "bun");
  const burgerData = burger.filter((ingredient) => ingredient.type !== "bun");

  const bunsId = bunsData[0]?._id;

  useEffect(() => {
    if (burgerData.length !== 0) {
      const ingredientsDataId = [
        bunsId,
        ...burgerData.map((ingredient) => ingredient._id),
        bunsId,
      ];
      dispatch(fetchOrderNumber(ingredientsDataId));
    }
    if (burgerData.length === 0 && bunsId) {
      const ingredientsDataId = [bunsId, bunsId];
      dispatch(fetchOrderNumber(ingredientsDataId));
    }
  }, [dispatch, bunsId, burgerData]);

  return (
    <div className={styles.box}>
      <p className={`text text_type_digits-large mt-10 mb-8 ${styles.glow}`}>
        {order ? order.order.number : "loading"}
      </p>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <img src={done} alt="изображение загрузки" className="mb-15" />
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mb-15">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;
