import IngredientItem from "../IngredientItem/IngredientItem.jsx";
import styles from './ItemsSection.module.scss'
import PropTypes from 'prop-types';

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

ItemsSection.propTypes = {
  data: PropTypes.array
}

export default ItemsSection;
