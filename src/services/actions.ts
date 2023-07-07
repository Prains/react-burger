import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/api";
import token from "../utils/token";
import { websocketReceived } from "./reducers/WebSocket";

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchIngredients",
  async function (isLoading: Function) {
    const responce = await api.getIngredientsData();
    const data = await responce.data;
    isLoading(false);
    return data;
  }
);

export const fetchOrderNumber = createAsyncThunk(
  "order/fetchOrderNubmer",
  async function (data: any) {
    const access = token.getAccesToken();
    const responce = await api.postOrderData(data, access);
    return responce;
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async () => {
    const access = token.getAccesToken();
    if (access) {
      try {
        const responce = await api.checkUser(access);
        return responce.user;
      } catch (error) {
        const refresh = token.getRefreshToken();
        const responce = await api.refreshToken(refresh);
        token.setAccessToken(responce.accessToken);
        const access = token.getAccesToken();
        const responceSecond = await api.checkUser(access);
        return responceSecond.user;
      }
    }
  }
);

export const wsConnect = (host: string) => ({
  type: "WS_CONNECT",
  payload: host,
});

export const wsDisconnect = () => ({
  type: "WS_DISCONNECT",
});

export const newMessage = (msg: string) => ({
  type: "NEW_MESSAGE",
  payload: msg,
});

export const receivedMessage = (msg: string) => ({
  type: "RECEIVED_MESSAGE",
  payload: msg,
});

export const websocketMiddleware = (storeAPI: any) => {
  let socket: any = null;

  return (next: any) => (action: any) => {
    switch (action.type) {
      case "WS_CONNECT":
        // Start a new connection to the server
        if (socket !== null) {
          socket.close();
        }
        // Pass in the action.payload as the URL to connect to
        socket = new WebSocket(action.payload);

        // Add an event listener for when a message is received
        socket.onmessage = (event: any) => {
          // Dispatch an action to store the received message in the Redux store
          storeAPI.dispatch(websocketReceived(JSON.parse(event.data)));
        };
        break;

      case "WS_DISCONNECT":
        // Disconnect if socket is active
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        break;

      case "NEW_MESSAGE":
        // Send data to the server
        socket.send(JSON.stringify(action.payload));
        break;

      default:
        // If the action does not pertain to the websocket,
        // pass it on to the next middleware in the chain
        return next(action);
    }
  };
};
