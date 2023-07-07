import styles from "./OrderDetails.module.scss";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingredient } from "../../../../../utils/types";

interface OrderDetailsProps {
  ingredients: Ingredient[];
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ ingredients }) => {
  return (
    <div className={styles.overflow}>
      {ingredients.map((ingredient) => {
        return (
          <div key={ingredient._id} className={styles.itemtop}>
            <div className={styles.itemtopbottom}>
              <img
                src={ingredient.image_mobile}
                alt={ingredient.name}
                className={styles.image}
              />
              <p className="text text_type_main-default">{ingredient.name}</p>
            </div>
            <p className={"text text_type_digits-default " + styles.price}>
              {ingredient.price}
              <CurrencyIcon type="primary" />
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default OrderDetails;
