import styles from "./ConstructorBody.module.scss";
import PropTypes from "prop-types";
import ConstructorItem from "./ConstructorItem/ConstructorItem";
import { useDispatch, useSelector } from "react-redux";
import { setBurger } from "../../services/reducers/Burger";

const ConstructorBody = ({ ingredientsData }) => {
  const { burger } = useSelector((state) => state.burger);
  const dispatch = useDispatch();
  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragItem = burger[dragIndex];

    if (dragItem) {
      const coppiedStateArray = [...burger];
      const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

      coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

      dispatch(setBurger(coppiedStateArray));
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
            key={index}
            index={index}
            moveCardHandler={moveCardHandler}
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
