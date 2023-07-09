import React from "react";
import styles from "./ConstructorBody.module.scss";
import PropTypes from "prop-types";
import ConstructorItem from "./ConstructorItem/ConstructorItem";
import { useAppDispatch, useAppSelector } from "../../../hooks/useReduxHooks";
import { setBurger } from "../../../services/reducers/Burger";
import { Ingredient } from "../../../utils/types";
import { RootState } from '../../../services/store';

interface ConstructorBodyProps {
  ingredientsData: Ingredient[];
}

const ConstructorBody: React.FC<ConstructorBodyProps> = ({
  ingredientsData,
}) => {
  const { burger } = useAppSelector((state: RootState) => state.burger);
  const dispatch = useAppDispatch();

  const moveCard = (dragIndex: number, hoverIndex: number, key: string) => {
    const noBun = burger.filter((ingredient: Ingredient) => ingredient.type !== "bun");
    const bun = burger.filter((ingredient: Ingredient) => ingredient.type === "bun");
    const dragCard = noBun.filter((ingredient: Ingredient) => ingredient.uuid === key);
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
