import styles from "./ConstructorBody.module.scss";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const ConstructorBody = ({ ingredientsData }) => {
  return (
    <div className={styles.content}>
      {ingredientsData.map((ingredient) => {
        return (
          <div className={styles.item} key={ingredient._id}>
            <DragIcon />
            <ConstructorElement
              text="Краторная булка N-200i (низ)"
              price={ingredient.price}
              thumbnail={ingredient.image}
            />
          </div>
        );
      })}
    </div>
  );
};

ConstructorBody.propTypes = {
  ingredientsData: PropTypes.array.isRequired,
};

export default ConstructorBody;
