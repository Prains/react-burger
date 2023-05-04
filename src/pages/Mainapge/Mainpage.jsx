import BurgerConstructor from "../../components/Mainpage/BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../../components/Mainpage/BurgerIngredients/BurgerIngredients";
import styles from "./Mainpage.module.scss";

const Mainpage = () => {
  return (
    <main className={styles.page}>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  );
};

export default Mainpage;
