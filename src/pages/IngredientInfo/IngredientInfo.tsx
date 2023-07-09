import React from "react";
import { useAppSelector } from "../../hooks/useReduxHooks";
import { useParams } from "react-router-dom";
import IngredientDetails from "../../components/ModalWithIngredient/IngredientDetails/IngredientDetails";
import styles from "./IngredientInfo.module.scss";
import { RootState } from '../../services/store';
import { Ingredient } from '../../utils/types';

const IngredientInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { ingredients } = useAppSelector((state: RootState) => state.ingredients);
  const currentIngredient = ingredients.filter(
    (ingredient: Ingredient) => ingredient._id === id
  );

  return (
    <section className={styles.section}>
      <h4 className="text text_type_main-medium">Детали ингредиента</h4>
      <IngredientDetails {...currentIngredient[0]} />
    </section>
  );
};

export default IngredientInfo;
