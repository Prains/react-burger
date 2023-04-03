import { useState, useEffect } from "react";
import AppHeader from "./components/Header/AppHeader";
import Mainpage from "./pages/Mainapge/Mainpage";
import { useDispatch } from "react-redux";
import { setIngredients } from "./services/reducers/Ingredients";
import api from "./utils/api";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    api.getIngredientsData().then((res) => {
      dispatch(setIngredients(res.data));
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Page is still loading....</h1>;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <AppHeader />
        <Mainpage />
      </div>
    </DndProvider>
  );
}

export default App;
