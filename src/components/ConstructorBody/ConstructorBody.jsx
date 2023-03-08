import styles from "./ConstructorBody.module.scss";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ConstructorBody = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.item}>
        <DragIcon />
        <ConstructorElement
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={props.img}
        />
      </div>
      <div className={styles.item}>
        <DragIcon />
        <ConstructorElement
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={props.img}
        />
      </div>
      <div className={styles.item}>
        <DragIcon />
        <ConstructorElement
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={props.img}
        />
      </div>
      
    </div>
  );
};

export default ConstructorBody;
