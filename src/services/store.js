import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./reducers/Ingredients";
import orderReducer from "./reducers/Order";
import burgerReducer from "./reducers/Burger";

const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    order: orderReducer,
    burger: burgerReducer,
  },
});

export default store;
