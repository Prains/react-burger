import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./IngredientItem.module.scss";
import { useState } from "react";
import ModalWithIngredient from "../../ModalWithIngredient/ModalWithIngredient";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { ingredientPropType } from "../../../utils/types";

const IngredientItem = (props) => {
  const { burger } = useSelector((state) => state.burger);
  const burgerItem = burger.find((item) => item._id === props.data._id);
  const countItemsWithId = burger.filter(
    (item) => item._id === props.data._id
  ).length;
  const count = props.data.type === "bun" ? 2 : countItemsWithId;
  const [isModalShown, setModalShown] = useState(false);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ingredient",
    item: { item: props.data },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      <div
        className={styles.item}
        onClick={() => setModalShown(true)}
        ref={drag}
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        <div className={styles.image}>
          <img src={props.data.image} alt={props.data.name} />
          {burgerItem && <Counter count={count} size="default" />}
        </div>
        <p className={`text text_type_digits-default ${styles.text}`}>
          {props.data.price} <CurrencyIcon />
        </p>
        <p className="text text_type_main-default">{props.data.name}</p>
      </div>
      {isModalShown && <ModalWithIngredient close={setModalShown} {...props} />}
    </>
  );
};

IngredientItem.propTypes = {
  data: ingredientPropType,
};

export default IngredientItem;
