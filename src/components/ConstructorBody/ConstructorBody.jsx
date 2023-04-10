import styles from "./ConstructorBody.module.scss";
import PropTypes from "prop-types";
import ConstructorItem from "./ConstructorItem/ConstructorItem";
import { useDispatch, useSelector } from "react-redux";
import { setBurger } from "../../services/reducers/Burger";

const ConstructorBody = ({ ingredientsData }) => {
  const { burger } = useSelector((state) => state.burger);
  const dispatch = useDispatch();
  const moveCard = (dragIndex, hoverIndex, key) => {
    const noBun = burger.filter((ingredient) => ingredient.type !== "bun");
    const bun = burger.filter((ingredient) => ingredient.type === "bun");
    const dragCard = noBun.filter((ingredient) => ingredient.uuid === key);
    if (dragCard) {
      const newCards = [...noBun];
      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, ...dragCard);
      newCards.unshift(bun[0]);
      dispatch(setBurger(newCards));
    }
  };

  return (
    <div className={styles.content}>
      {ingredientsData.map((ingredient, index) => {
        return (
          <ConstructorItem
            ingredient={ingredient}
            key={ingredient.uuid}
            uuid={ingredient.uuid}
            index={index}
            moveCardHandler={moveCard}
          />
        );
      })}
    </div>
  );
};

ConstructorBody.propTypes = {
  ingredientsData: PropTypes.array.isRequired,
};

export default ConstructorBody;
