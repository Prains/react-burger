import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import styles from "./BurgerConstructor.module.scss";
import ConstructorBody from "../ConstructorBody/ConstructorBody";
import ModalWithOrder from "../../ModalWIthOrder/ModalWithOrder";
import {
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorPayment from "./ConstructorPayment/ConstructorPayment";
import { setBurger } from "../../../services/reducers/Burger";

const BurgerConstructor: React.FC = () => {
  const [orderVisibility, setOrderVisibility] = useState(false);
  const burger = useSelector((state: any) => state.burger.burger);
  const { user } = useSelector((state: any) => state.user);
  const bun = burger.find((item: any) => item.type === "bun");
  const ingredients = burger.filter((item: any) => item.type !== "bun");
  const totalPrice = burger.reduce(
    (acc: any, curr: any) => acc + curr.price,
    0
  );
  const dispatch = useDispatch();

  const visibility = burger.length !== 0;

  const [, drop] = useDrop({
    accept: "ingredient",
    drop: ({ item }: { item: any }) => {
      const uuid = uuidv4();
      if (item.type === "bun") {
        const bunIndex = burger.findIndex((b: any) => b.type === "bun");
        if (bunIndex !== -1) {
          const updatedBun = {
            ...item,
            id: burger[bunIndex].id,
            price: item.price * 2,
            uuid: uuid,
          };
          const updatedBurger = [...burger];
          updatedBurger[bunIndex] = updatedBun;
          dispatch(setBurger(updatedBurger));
          return;
        }
        const newBun = { ...item, price: item.price * 2, uuid: uuid };
        dispatch(setBurger([...burger, newBun]));
        return;
      }
      const newBun = { ...item, uuid: uuid };
      dispatch(setBurger([...burger, newBun]));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <section className={styles.burgerconstructor} ref={drop}>
      {bun && (
        <ConstructorElement
          text={bun.name + "(вверх)"}
          thumbnail={bun.image}
          isLocked={true}
          type="top"
          price={bun.price}
        />
      )}
      <ConstructorBody ingredientsData={ingredients} />
      {burger.length === 0 && (
        <h2
          style={{
            marginBottom: "150px",
          }}
        >
          Перетаскивайте сюда ингредиенты
        </h2>
      )}
      {bun && (
        <ConstructorElement
          text={bun.name + "(низ)"}
          thumbnail={bun.image}
          isLocked={true}
          type="bottom"
          price={bun.price}
        />
      )}
      <ConstructorPayment
        totalPrice={totalPrice}
        setOrderVisibility={setOrderVisibility}
        visibility={visibility}
        user={user}
      />
      {orderVisibility && visibility && (
        <ModalWithOrder close={() => setOrderVisibility(false)} />
      )}
    </section>
  );
};

export default BurgerConstructor;
