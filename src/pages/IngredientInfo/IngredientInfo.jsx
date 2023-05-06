import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IngredientDetails from "../../components/ModalWithIngredient/IngredientDetails/IngredientDetails";
import styles from "./IngredientInfo.module.scss";

const IngredientInfo = () => {
  const { id } = useParams();
  const { ingredients } = useSelector((state) => state.ingredients);
  const currentIngredient = ingredients.filter(
    (ingredient) => ingredient._id === id
  );

  return (
    <section className={styles.section}>
      <h4 className="text text_type_main-medium">Детали ингредиента</h4>
      <IngredientDetails {...currentIngredient[0]} />
    </section>
  );
};

export default IngredientInfo;
