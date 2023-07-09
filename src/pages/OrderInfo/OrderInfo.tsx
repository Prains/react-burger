import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/useReduxHooks";
import styles from "./OrderInfo.module.scss";
import OrderDetails from "../../components/FeedPage/OrderBlock/OrderModal/OrderDetails/OrderDetails";
import OrderNumbers from "../../components/FeedPage/OrderBlock/OrderModal/OrderNumbers/OrderNumbers";
import formatDate from "../../utils/formatDate";
import { Order, socketUrl, Ingredient } from '../../utils/types';
import useSocket from "../../hooks/useSocket";
import { RootState } from '../../services/store';

const OrderInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { ingredients } = useAppSelector((state: RootState) => state.ingredients);
  const data = useSocket(socketUrl);
  const order = data?.orders.find((order: Order) => order._id === id);
  const currentIngredients = ingredients.filter((ingredient: Ingredient) =>
    order?.ingredients?.some(
      (orderIngredient: string) => orderIngredient === ingredient._id
    )
  );
  const totalPrice = currentIngredients?.reduce(
    (total: number, ingredient: Ingredient) => {
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
