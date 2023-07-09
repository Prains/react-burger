import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./OrderBlock.module.scss";
import { useAppSelector } from "../../../hooks/useReduxHooks";
import { useState } from "react";
import OrderModal from "./OrderModal/OrderModal";
import { links } from "../../../utils/links";
import formatDate from "../../../utils/formatDate";
import { Ingredient, Order } from "../../../utils/types";
import { RootState } from '../../../services/store';

interface OrderBlockProps {
  order: Order;
}

const OrderBlock: React.FC<OrderBlockProps> = ({ order }) => {
  const { name, number, createdAt } = order;
  const { ingredients } = useAppSelector((state: RootState) => state.ingredients);
  const [orderPopupShown, setOrderPopupShown] = useState(false);
  const currentIngredients = ingredients.filter((ingredient: Ingredient) =>
    order.ingredients.some(
      (orderIngredient: string) => orderIngredient === ingredient._id
    )
  );
  const totalPrice = currentIngredients.reduce(
    (total: number, ingredient: Ingredient) => {
      return total + ingredient.price;
    },
    0
  );

  const date = formatDate(createdAt);

  return (
    <>
      <article
        className={styles.article}
        onClick={() => {
          window.history.pushState("", "", `${links.feed}/${order._id}`);
          setOrderPopupShown(true);
        }}
      >
        <div className={styles.numbers}>
          <p className="text text_type_main-medium">#{number}</p>
          <p className="text text_type_main-default text_color_inactive">
            {date} i-GMT+3
          </p>
        </div>
        <h5 className="text text_type_main-medium">{name}</h5>
        <div className={styles.bottom}>
          <div className={styles.images}>
            {currentIngredients.map((ingredient: Ingredient, index: number) => {
              if (index < 5) {
                return (
                  <img
                    src={ingredient.image}
                    className={styles.image}
                    alt={ingredient.name}
                    key={ingredient._id}
                  />
                );
              } else if (index === 5) {
                return (
                  <p
                    className={styles.more + " text text_type_digits-default"}
                    key={index}
                  >
                    +{currentIngredients.length - index - 1}
                  </p>
                );
              }
              return null; // Прерывает map после вывода первых 5 элементов
            })}
          </div>
          <p className={"text text_type_main-medium " + styles.price}>
            {totalPrice} <CurrencyIcon type="primary" />
          </p>
        </div>
      </article>
      {orderPopupShown && (
        <OrderModal
          close={() => {
            window.history.back();
            setOrderPopupShown(false);
          }}
          order={order}
          date={date}
          ingredients={currentIngredients}
          totalPrice={totalPrice}
        />
      )}
    </>
  );
};

export default OrderBlock;
