import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ConstructorItem.module.scss";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBurger } from "../../../../services/reducers/Burger";
import PropTypes from "prop-types";

const ConstructorItem = ({ ingredient, index, moveCardHandler, uuid }) => {
  const { burger } = useSelector((state) => state.burger);
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag({
    type: "ingredientActive",
    item: { uuid, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const ref = useRef();

  const [, drop] = useDrop({
    accept: "ingredientActive",
    hover: (item, monitor) => {
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
        const coppiedStateArray = burger.filter((item) => item !== ingredient);
        dispatch(setBurger(coppiedStateArray));
      }}
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

ConstructorItem.propTypes = {
  ingredient: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  moveCardHandler: PropTypes.func.isRequired,
  uuid: PropTypes.string.isRequired,
};

export default ConstructorItem;
