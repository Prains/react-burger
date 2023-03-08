import AppHeader from "./components/Header/AppHeader";
import Mainpage from "./pages/Mainapge/Mainpage";
import { useEffect, useState } from "react";
import Api from "./utils/api";

function App() {
  const baseUrl = "https://norma.nomoreparties.space/api/ingredients";
  const [BurgerIngredients, setBurgerIngredients] = useState();

  const api = new Api(baseUrl);

  useEffect(() => {
    api.getIngredientsData().then((res) => {
      setBurgerIngredients(res.data);
    });
  }, []);

  return (
    <>
      {BurgerIngredients && (
        <div className="App">
          <AppHeader />
          <Mainpage BurgerIngredientsData={BurgerIngredients} />
        </div>
      )}
    </>
  );
}

export default App;
