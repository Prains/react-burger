import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
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
