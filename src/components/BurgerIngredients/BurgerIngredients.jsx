import ItemsSection from "../ItemsSection/ItemsSection";
import Tabs from "../Tabs/Tabs";
import styles from "./BurgerIngredients.module.scss";
import { BurgerIngredientsContext } from "../../services/Context";
import { useContext } from "react";

const BurgerIngredients = () => {
  const burgerIngredientsData = useContext(BurgerIngredientsContext);

  const bunsData = burgerIngredientsData.filter((bun) => bun.type === "bun");
  const sauceData = burgerIngredientsData.filter(
    (sauce) => sauce.type === "sauce"
  );
  const flavoursData = burgerIngredientsData.filter(
    (flavour) => flavour.type === "main"
  );

  return (
    <section className={styles.burgeringredients}>
      <h2 className="text text_type_main-large">Соберите бургер</h2>
      <Tabs />
      <section className={styles.items}>
        <h2 className="text text_type_main-large" id="bun">
          Булки
        </h2>
        <ItemsSection data={bunsData} />
        <h2 className="text text_type_main-large" id="sauce">
          Соусы
        </h2>
        <ItemsSection data={sauceData} />
        <h2 className="text text_type_main-large" id="main">
          Начинки
        </h2>
        <ItemsSection data={flavoursData} />
      </section>
    </section>
  );
};
export default BurgerIngredients;
