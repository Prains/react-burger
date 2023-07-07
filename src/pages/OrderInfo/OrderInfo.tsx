import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./OrderInfo.module.scss";
import OrderDetails from "../../components/FeedPage/OrderBlock/OrderModal/OrderDetails/OrderDetails";
import OrderNumbers from "../../components/FeedPage/OrderBlock/OrderModal/OrderNumbers/OrderNumbers";
import formatDate from "../../utils/formatDate";
import { socketUrl } from "../../utils/types";
import useSocket from "../../hooks/useSocket";

const OrderInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { ingredients } = useSelector((state: any) => state.ingredients);
  const data = useSocket(socketUrl);
  const order = data?.orders.find((order: any) => order._id === id);
  const currentIngredients = ingredients.filter((ingredient: any) =>
    order?.ingredients?.some(
      (orderIngredient: any) => orderIngredient === ingredient._id
    )
  );
  const totalPrice = currentIngredients?.reduce(
    (total: any, ingredient: any) => {
      return total + ingredient.price;
    },
    0
  );

  const date = formatDate(order?.createdAt);

  if (!order) {
    return null;
  }

  return (
    <>
      <section className={styles.section}>
        <p className={`text text_type_digits-medium ${styles.number}`}>
          #{order.number}
        </p>
        <h4 className={styles.uppertitle + " text text_type_main-medium"}>
          {order.name}
          <span className={styles.titlespan}>
            {order.status === "done" ? "Выполнен" : "В работе"}
          </span>
        </h4>
        <p className="text text_type_main-medium">Состав:</p>
        <OrderDetails ingredients={currentIngredients} />
        <OrderNumbers totalPrice={totalPrice} date={date} />
      </section>
    </>
  );
};

export default OrderInfo;
