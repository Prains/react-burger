import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./IngredientItem.module.scss";
import { useState } from "react";

const IngredientItem = (props) => {
  let [count, setCounter] = useState(0);

  return (
    <div className={styles.item} onClick={() => setCounter(++count)}>
      <div className={styles.image}>
        <img src={props.data.image} alt={props.data.name} />
        {count > 0 && <Counter count={count} size="default" />}
      </div>
      <p className={`text text_type_digits-default ${styles.text}`}>
        {props.data.price} <CurrencyIcon />
      </p>
      <p className="text text_type_main-default">{props.data.name}</p>
    </div>
  );
};

export default IngredientItem;
