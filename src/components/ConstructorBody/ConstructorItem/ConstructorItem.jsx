import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ConstructorItem.module.scss";

import { useDrag, useDrop } from "react-dnd";

import { useRef } from "react";

const ConstructorItem = ({ ingredient, index, moveCardHandler }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ingredientActive",
    item: { ingredient: ingredient, index: index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "ingredientActive",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
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
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
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
      // Time to actually perform the action
      moveCardHandler(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  drag(drop(ref));
  return (
    <div
      className={styles.item}
      key={ingredient._id}
      ref={ref}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <DragIcon />
      <ConstructorElement
        text={`${ingredient.name}`}
        price={ingredient.price}
        thumbnail={ingredient.image}
      />
    </div>
  );
};

export default ConstructorItem;
