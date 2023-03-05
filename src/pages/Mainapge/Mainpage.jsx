import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import styles from "./Mainpage.module.scss";

const Mainpage = (props) => {

  return (
    <main className={styles.page}>
      <BurgerIngredients data={props.BurgerIngredientsData}/>
      <BurgerConstructor />
    </main>
  );
};

export default Mainpage;
