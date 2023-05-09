import IngredientItem from "../IngredientItem/IngredientItem.jsx";
import styles from "./ItemsSection.module.scss";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../utils/types.js";

const ItemsSection = (props) => {
  return (
    <section className={styles.bread}>
      {props.data.map((item) => {
        return <IngredientItem data={item} key={item._id} />;
      })}
    </section>
  );
};

ItemsSection.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType).isRequired,
};

export default ItemsSection;
