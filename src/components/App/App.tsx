import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { fetchCurrentUser, fetchIngredients } from "../../services/actions";
import { RouterProvider } from "react-router-dom";
import { router } from "../../utils/links";
import { AppDispatch } from "../../services/store";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCurrentUser());
    dispatch(fetchIngredients(setIsLoading));
  }, [dispatch]);

  if (isLoading) {
    return <h1>Page is still loading....</h1>;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </DndProvider>
  );
};

export default App;
