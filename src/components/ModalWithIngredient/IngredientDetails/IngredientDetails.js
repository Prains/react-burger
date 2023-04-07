import styles from "./IngredientDetails.module.scss";
import ModalDescriptionBox from "../../ModalDescriptionBox/ModalDescriptionBox";

const IngredientDetails = (props) => {
  return (
    <div className={styles.modalbox}>
      <p className="text text_type_main-medium">{props.data.name}</p>
      <ModalDescriptionBox {...props} />
    </div>
  );
};

export default IngredientDetails;
