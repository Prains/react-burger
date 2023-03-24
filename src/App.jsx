import AppHeader from "./components/Header/AppHeader";
import Mainpage from "./pages/Mainapge/Mainpage";
import { useEffect, useState } from "react";
import Api from "./utils/api";
import { BurgerIngredientsContext, ApiClassContext } from "./services/Context";

function App() {
  const baseUrl = "https://norma.nomoreparties.space/api";
  const [BurgerIngredients, setBurgerIngredients] = useState();

  const api = new Api(baseUrl);

  useEffect(() => {
    api.getIngredientsData().then((res) => {
      setBurgerIngredients(res.data);
    });
  }, []);

  return (
    <>
      {BurgerIngredients ? (
        <ApiClassContext.Provider value={api}>
        <BurgerIngredientsContext.Provider value={BurgerIngredients}>
          <div className="App">
            <AppHeader />
            <Mainpage/>
          </div>
        </BurgerIngredientsContext.Provider>
        </ApiClassContext.Provider>
      ) : (
        <h1>Page is still loading....</h1>
      )}
    </>
  );
}

export default App;
