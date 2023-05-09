import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./OrderBlock.module.scss";
import { useSelector } from "react-redux";

const OrderBlock = ({ order }) => {
  const { name, number, createdAt } = order;
  const { ingredients } = useSelector((state) => state.ingredients);
  const currentIngredients = ingredients.filter((ingredient) =>
    order.ingredients.some(
      (orderIngredient) => orderIngredient === ingredient._id
    )
  );
  const totalPrice = currentIngredients.reduce((total, ingredient) => {
    return total + ingredient.price;
  }, 0);

  function formatDate(input) {
    const date = new Date(input);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    const time = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (diffDays === 0) {
      return "Сегодня, " + time;
    } else if (diffDays === 1) {
      return "Вчера, " + time;
    } else {
      return diffDays + " Дня(ей) назад, " + time;
    }
  }

  const date = formatDate(createdAt);

  return (
    <article className={styles.article}>
      <div className={styles.numbers}>
        <p className="text text_type_main-medium">#{number}</p>
        <p className="text text_type_main-default text_color_inactive">
          {date} i-GMT+3
        </p>
      </div>
      <h5 className="text text_type_main-medium">{name}</h5>
      <div className={styles.bottom}>
        <div className={styles.images}>
          {currentIngredients.map((ingredient) => {
            return (
              <img
                src={ingredient.image}
                className={styles.image}
                alt={ingredient.name}
                key={ingredient._id}
              />
            );
          })}
        </div>
        <p className={"text text_type_main-medium " + styles.price}>
          {totalPrice} <CurrencyIcon />
        </p>
      </div>
    </article>
  );
};

export default OrderBlock;
