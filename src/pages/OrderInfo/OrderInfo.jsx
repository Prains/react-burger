import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import OrderDetails from "../../components/FeedPage/OrderBlock/OrderModal/OrderDetails/OrderDetails";
import { useSelector } from "react-redux";
import styles from "./OrderInfo.module.scss";
import OrderNumbers from "../../components/FeedPage/OrderBlock/OrderModal/OrderNumbers/OrderNumbers";
import formatDate from "../../utils/formatDate";

const OrderInfo = () => {
  useEffect(() => {
    const socket = new WebSocket("wss://norma.nomoreparties.space/orders/all");
    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setData(data);
    };
    return () => {
      socket.close();
    };
  }, []);

  const [data, setData] = useState();
  const { id } = useParams();
  const { ingredients } = useSelector((state) => state.ingredients);
  const order = data?.orders.find((order) => order._id === id);
  const currentIngredients = ingredients.filter((ingredient) =>
    order?.ingredients?.some(
      (orderIngredient) => orderIngredient === ingredient._id
    )
  );
  const totalPrice = currentIngredients?.reduce((total, ingredient) => {
    return total + ingredient.price;
  }, 0);

  const date = formatDate(order?.createdAt);

  return (
    <>
      {order && (
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
      )}
    </>
  );
};

export default OrderInfo;
