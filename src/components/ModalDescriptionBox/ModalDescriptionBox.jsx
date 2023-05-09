import ModalDescriptionItem from "../ModalDescriptionItem/ModalDescriptionItem";
import styles from "./ModalDescriptionBox.module.scss";
import PropTypes from "prop-types";

const ModalDescriptionBox = ({ calories, proteins, fat, carbohydrates }) => {
  return (
    <div className={styles.box}>
      <ModalDescriptionItem data={calories}>Калории, ккал</ModalDescriptionItem>
      <ModalDescriptionItem data={proteins}>Белки, г</ModalDescriptionItem>
      <ModalDescriptionItem data={fat}>Жиры, г</ModalDescriptionItem>
      <ModalDescriptionItem data={carbohydrates}>
        Углеводы, г
      </ModalDescriptionItem>
    </div>
  );
};

ModalDescriptionBox.propTypes = {
  calories: PropTypes.number,
  carbohydrates: PropTypes.number,
  fat: PropTypes.number,
  proteins: PropTypes.number,
};

export default ModalDescriptionBox;