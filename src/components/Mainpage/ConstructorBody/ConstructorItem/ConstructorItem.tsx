import React, { useRef } from "react";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useReduxHooks";
import { setBurger } from "../../../../services/reducers/Burger";
import { Ingredient } from "../../../../utils/types";
import styles from "./ConstructorItem.module.scss";
import { RootState } from '../../../../services/store';

interface ConstructorItemProps {
  ingredient: Ingredient;
  index: number;
  moveCardHandler: (dragIndex: number, hoverIndex: number, key: string) => void;
  uuid: string;
}

const ConstructorItem: React.FC<ConstructorItemProps> = ({
  ingredient,
  index,
  moveCardHandler,
  uuid,
}) => {
  const { burger } = useAppSelector((state: RootState) => state.burger);
  const dispatch = useAppDispatch();
  const [{ isDragging }, drag] = useDrag({
    type: "ingredientActive",
    item: { uuid, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: "ingredientActive",
    hover: (item: any, monitor: any) => {
      if (!ref.current) {
        return;
      }
      const dragKey = item.uuid;
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset?.y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCardHandler(dragIndex, hoverIndex, dragKey);

      // eslint-disable-next-line no-param-reassign
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return (
    <div
      className={styles.item}
      ref={ref}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onClick={() => {
        const copiedStateArray = burger.filter(
          (item: Ingredient) => item !== ingredient
        );
        dispatch(setBurger(copiedStateArray));
      }}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={`${ingredient.name}`}
        price={ingredient.price}
        thumbnail={ingredient.image}
      />
    </div>
  );
};

export default ConstructorItem;
