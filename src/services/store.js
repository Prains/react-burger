import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./reducers/Ingredients";
import orderReducer from "./reducers/Order";
import burgerReducer from "./reducers/Burger";
import userReducer from "./reducers/User";
import socketReducer from "./reducers/WebSocket";
import { websocketMiddleware } from "./actions";

const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    order: orderReducer,
    burger: burgerReducer,
    user: userReducer,
    websocket: socketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(websocketMiddleware),
});

export default store;
