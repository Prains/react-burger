import { useState, useEffect } from "react";
import AppHeader from "../Header/AppHeader";
import Mainpage from "../../pages/Mainapge/Mainpage";
import { useDispatch } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { fetchIngredients } from "../../services/actions";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients(setIsLoading));
  }, [dispatch]);

  if (isLoading) {
    return <h1>Page is still loading....</h1>;
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainpage />,
    },
    {
      path: "/login",
      element: <div>login</div>,
    },
    {
      path: "/register",
      element: <div>register</div>,
    },
    {
      path: "/forgot-password",
      element: <div>forgot password</div>,
    },
    {
      path: "/reset-password",
      element: <div>reset password</div>,
    },
  ]);
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <AppHeader />
        <RouterProvider router={router} />
      </div>
    </DndProvider>
  );
}

export default App;
