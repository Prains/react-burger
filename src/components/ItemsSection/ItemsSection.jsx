import IngredientItem from "../IngredientItem/IngredientItem.jsx";
import styles from './ItemsSection.module.scss'

const ItemsSection = (props) => {
  return (
    <section className={styles.bread}>
      {props.data.map((item) => {
        return (
            <IngredientItem data={item} key={item._id}/>
        );
      })}
    </section>
  );
};

export default ItemsSection;
