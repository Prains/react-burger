import ConstructorBody from "../ConstructorBody/ConstructorBody";
import ModalWithOrder from "../ModalWIthOrder/ModalWithOrder";
import styles from "./BurgerConstructor.module.scss";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useContext, useState, useEffect } from "react";
import { BurgerIngredientsContext } from "../../services/Context";

const BurgerConstructor = () => {
  const [orderVisibility, setOrderVisibility] = useState(false);
  const burgerIngredients = useContext(BurgerIngredientsContext);
  const bunsData = burgerIngredients.filter((bun) => bun.type === "bun");
  const [totalPrice, setTotalPrice] = useState(bunsData[0].price * 2);
  const ingredientsData = burgerIngredients.filter(
    (ingredient) => ingredient.type !== "bun"
  );

  useEffect(() => {
    let ingredientsDataPrice = 0;
    ingredientsData.forEach((ingredient) => {
      ingredientsDataPrice += ingredient.price;
    });
    setTotalPrice(ingredientsDataPrice);
  }, [ingredientsData]);

  return (
    <section className={styles.burgerconstructor}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={`${bunsData[0].name} (верх)`}
        price={bunsData[0].price}
        thumbnail={bunsData[0].image}
      />
      <ConstructorBody ingredientsData={ingredientsData} />
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={`${bunsData[0].name} (низ)`}
        price={bunsData[0].price}
        thumbnail={bunsData[0].image}
      />
      <div className={styles.payment}>
        <p className={`text text_type_digits-medium ${styles.text}`}>
          {totalPrice} <CurrencyIcon />
        </p>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => setOrderVisibility(true)}
        >
          Оформить заказ
        </Button>
      </div>
      {orderVisibility && <ModalWithOrder close={setOrderVisibility} />}
    </section>
  );
};

export default BurgerConstructor;
