import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./reducers/Ingredients";
import orderReducer from "./reducers/Order";
import burgerReducer from "./reducers/Burger";
import userReducer from "./reducers/User";

const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    order: orderReducer,
    burger: burgerReducer,
    user: userReducer,
  },
});

export default store;
