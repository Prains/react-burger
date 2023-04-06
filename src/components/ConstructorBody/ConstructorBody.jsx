import styles from "./ConstructorBody.module.scss";
import PropTypes from "prop-types";
import ConstructorItem from "./ConstructorItem/ConstructorItem";
import { useDispatch, useSelector } from "react-redux";
import { setBurger } from "../../services/reducers/Burger";
import { v4 as uuidv4 } from "uuid";

const ConstructorBody = ({ ingredientsData }) => {
  const { burger } = useSelector((state) => state.burger);
  const dispatch = useDispatch();
  const moveCard = (dragIndex, hoverIndex, key) => {
    const dragCard = burger.filter((ingredient) => ingredient.uuid === key);
    console.log(dragCard);
    if (dragCard) {
      const newCards = [...burger];
      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, ...dragCard);
      dispatch(setBurger(newCards));
    }
  };

  let index = -1;

  return (
    <div className={styles.content}>
      {ingredientsData.map((ingredient) => {
        index++;
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
