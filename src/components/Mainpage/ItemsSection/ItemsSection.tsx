import React from "react";
import IngredientItem from "../IngredientItem/IngredientItem";
import styles from "./ItemsSection.module.scss";
import { Ingredient } from "../../../utils/types";

interface ItemsSectionProps {
  data: Ingredient[];
}

const ItemsSection: React.FC<ItemsSectionProps> = ({ data }) => {
  return (
    <section className={styles.bread}>
      {data.map((item) => {
        return <IngredientItem data={item} key={item._id} />;
      })}
    </section>
  );
};

export default ItemsSection;
