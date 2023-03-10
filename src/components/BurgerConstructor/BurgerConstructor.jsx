import ConstructorBody from "../ConstructorBody/ConstructorBody";
import ModalWithOrder from "../ModalWIthOrder/ModalWithOrder";
import styles from "./BurgerConstructor.module.scss";
import { ConstructorElement, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";



const BurgerConstructor = () => {
  const [orderVisibility, setOrderVisibility] = useState(false);



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
        <Button htmlType="button" type="primary" size="large" onClick={()=>setOrderVisibility(true)}>
          Оформить заказ
        </Button>
      </div>
      {orderVisibility && <ModalWithOrder close={setOrderVisibility}/>}

    </section>
  );
};

export default BurgerConstructor;
