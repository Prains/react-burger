import ConstructorBody from "../ConstructorBody/ConstructorBody";
import styles from "./BurgerConstructor.module.scss";
import { ConstructorElement, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = () => {
  const img = "https://code.s3.yandex.net/react/code/bun-02.png";
  return (
    <section className={styles.burgerconstructor}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={img}
      />
      <ConstructorBody img={img} />
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={img}
      />
      <div className={styles.payment}>
        <p className={`text text_type_digits-medium ${styles.text}`}>610 <CurrencyIcon/></p>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;