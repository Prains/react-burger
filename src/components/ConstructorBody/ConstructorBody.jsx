import styles from "./ConstructorBody.module.scss";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

const ConstructorBody = (props) => {
  return (
    <div className={styles.content}>
      <ConstructorElement
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={props.img}
      />
      <ConstructorElement
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={props.img}
      />
      <ConstructorElement
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={props.img}
      />
      <ConstructorElement
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={props.img}
      />
      <ConstructorElement
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={props.img}
      />
      <ConstructorElement
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={props.img}
      />
      <ConstructorElement
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={props.img}
      />
      <ConstructorElement
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={props.img}
      />
    </div>
  );
};

export default ConstructorBody;
