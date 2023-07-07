import React, { useState } from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./IngredientItem.module.scss";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { links } from "../../../utils/links";
import { Ingredient } from "../../../utils/types";
import ModalWithIngredient from "../../ModalWithIngredient/ModalWithIngredient";

interface IngredientItemProps {
  data: Ingredient;
}

const IngredientItem: React.FC<IngredientItemProps> = ({ data }) => {
  const [isModalShown, setModalShown] = useState(false);
  const { burger } = useSelector((state: any) => state.burger);
  const burgerItem = burger.find((item: any) => item._id === data._id);
  const countItemsWithId = burger.filter(
    (item: any) => item._id === data._id
  ).length;
  const count = data.type === "bun" ? 2 : countItemsWithId;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ingredient",
    item: { item: data },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      <div
        className={styles.item}
        onClick={() => {
          setModalShown(true);
          window.history.pushState("", "", `${links.ingredients}/${data._id}`);
        }}
        ref={drag}
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        <div className={styles.image}>
          <img src={data.image} alt={data.name} />
          {burgerItem && <Counter count={count} size="default" />}
        </div>
        <p className={`text text_type_digits-default ${styles.text}`}>
          {data.price} <CurrencyIcon type="primary" />
        </p>
        <p className="text text_type_main-default">{data.name}</p>
      </div>
      {isModalShown && <ModalWithIngredient close={setModalShown} {...data} />}
    </>
  );
};

export default IngredientItem;
