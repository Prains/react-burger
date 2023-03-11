import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./IngredientItem.module.scss";
import { useState } from "react";
import ModalWithIngredient from "../ModalWithIngredient/ModalWithIngredient";
import { ingredientPropType } from "../../utils/types";


const IngredientItem = (props) => {
  const [count, setCounter] = useState(0);
  const [isModalShown, setModalShown] = useState(false)



  return (
    <>
      <div className={styles.item} onClick={() => setModalShown(true)}>
        <div className={styles.image}>
          <img src={props.data.image} alt={props.data.name} />
          {count > 0 && <Counter count={count} size="default" />}
        </div>
        <p className={`text text_type_digits-default ${styles.text}`}>
          {props.data.price} <CurrencyIcon />
        </p>
        <p className="text text_type_main-default">{props.data.name}</p>
      </div>
      {isModalShown && <ModalWithIngredient close={setModalShown} {...props}/>}
    </>
  );
};

IngredientItem.propTypes = {
  data: ingredientPropType
}

export default IngredientItem;
