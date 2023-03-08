import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import styles from "./Mainpage.module.scss";
import PropTypes from 'prop-types';

const Mainpage = (props) => {

  return (
    <main className={styles.page}>
      <BurgerIngredients data={props.BurgerIngredientsData}/>
      <BurgerConstructor />
    </main>
  );
};

Mainpage.propTypes = {
  BurgerIngredientsData: PropTypes.array
}


export default Mainpage;
