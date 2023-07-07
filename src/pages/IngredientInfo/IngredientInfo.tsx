import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IngredientDetails from "../../components/ModalWithIngredient/IngredientDetails/IngredientDetails";
import styles from "./IngredientInfo.module.scss";

const IngredientInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { ingredients } = useSelector((state: any) => state.ingredients);
  const currentIngredient = ingredients.filter(
    (ingredient: any) => ingredient._id === id
  );

  return (
    <section className={styles.section}>
      <h4 className="text text_type_main-medium">Детали ингредиента</h4>
      <IngredientDetails {...currentIngredient[0]} />
    </section>
  );
};

export default IngredientInfo;
