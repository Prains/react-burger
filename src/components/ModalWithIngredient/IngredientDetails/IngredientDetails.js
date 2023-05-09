import styles from "./IngredientDetails.module.scss";
import ModalDescriptionBox from "../../ModalDescriptionBox/ModalDescriptionBox";

const IngredientDetails = (props) => {
  return (
    <>
    <img src={props.image_large} alt={props.name} />
    <div className={styles.modalbox}>
      <p className="text text_type_main-medium">{props.name}</p>
      <ModalDescriptionBox {...props} />
    </div>
    </>
  );
};

export default IngredientDetails;
