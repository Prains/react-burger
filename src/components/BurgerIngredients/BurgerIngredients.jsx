import ItemsSection from "../ItemsSection/ItemsSection";
import Tabs from "../Tabs/Tabs";
import styles from "./BurgerIngredients.module.scss";

const BurgerIngredients = (props) => {
  const bunsData = props.data.filter((bun) => bun.type === "bun");
  const sauceData = props.data.filter((sauce) => sauce.type === "sauce");
  const flavoursData = props.data.filter((flavour) => flavour.type === "main");

  return (
    <section className={styles.burgeringredients}>
      <h2 className="text text_type_main-large">Соберите бургер</h2>
      <Tabs />
      <section className={styles.items}>
        <h2 className="text text_type_main-large">Булки</h2>
        <ItemsSection data={bunsData} />
        <h2 className="text text_type_main-large">Соусы</h2>
        <ItemsSection data={sauceData} />
        <h2 className="text text_type_main-large">Начинки</h2>
        <ItemsSection data={flavoursData} />
      </section>
    </section>
  );
};

export default BurgerIngredients;
