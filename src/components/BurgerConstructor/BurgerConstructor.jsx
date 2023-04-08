import ConstructorBody from "../ConstructorBody/ConstructorBody";
import ModalWithOrder from "../ModalWIthOrder/ModalWithOrder";
import styles from "./BurgerConstructor.module.scss";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import ConstructorPayment from "./ConstructorPayment/ConstructorPayment";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { setBurger } from "../../services/reducers/Burger";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
const BurgerConstructor = () => {
  const [orderVisibility, setOrderVisibility] = useState(false);
  const { burger } = useSelector((state) => state.burger);
  const bun = burger.filter((item) => item.type === "bun");
  const ingredients = burger.filter((item) => item.type !== "bun");
  const totalPrice = burger.reduce((acc, curr) => acc + curr.price, 0);
  const dispatch = useDispatch();

  const visibility = burger.length !== 0 ? true : false;

  const [, drop] = useDrop({
    accept: "ingredient",
    drop: ({ item }) => {
      const uuid = uuidv4();
      console.log(uuid);
      if (item.type === "bun") {
        const bunIndex = burger.findIndex((b) => b.type === "bun");
        if (bunIndex !== -1) {
          const updatedBun = {
            ...item,
            id: burger[bunIndex].id,
            price: item.price * 2,
            uuid: uuid,
          }; // увеличить стоимость булочки в два раза
          const updatedBurger = [...burger]; // создать новую копию массива burger
          updatedBurger[bunIndex] = updatedBun; // обновить элемент существующей булочки
          dispatch(setBurger(updatedBurger)); // обновить массив burger
          return; // завершить выполнение функции drop
        }
        const newBun = { ...item, price: item.price * 2, uuid: uuid }; // создать новый объект булочки с увеличенной стоимостью
        dispatch(setBurger([...burger, newBun])); // добавить новый ингредиент в массив burger
        return; // завершить выполнение функции drop
      }
      const newBun = { ...item, uuid: uuid }; // создать новый объект булочки с увеличенной стоимостью
      dispatch(setBurger([...burger, newBun])); // добавить новый ингредиент в массив burger
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <section className={styles.burgerconstructor} ref={drop}>
      {bun.length > 0 && (
        <ConstructorElement
          text={bun[0]?.name + "(вверх)"}
          thumbnail={bun[0]?.image}
          isLocked={true}
          type="top"
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
      {bun.length > 0 && (
        <ConstructorElement
          text={bun[0]?.name + "(низ)"}
          thumbnail={bun[0]?.image}
          isLocked={true}
          type="bottom"
        />
      )}
      <ConstructorPayment
        totalPrice={totalPrice}
        setOrderVisibility={setOrderVisibility}
        visibility={visibility}
      />
      {orderVisibility && visibility && (
        <ModalWithOrder close={setOrderVisibility} />
      )}
    </section>
  );
};

export default BurgerConstructor;
