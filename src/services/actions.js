import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/api";
import token from "../utils/token";

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchIngredients",
  async function (isLoading) {
    const responce = await api.getIngredientsData();
    const data = await responce.data;
    isLoading(false);
    return data;
  }
);

export const fetchOrderNumber = createAsyncThunk(
  "order/fetchOrderNubmer",
  async function (data) {
    const responce = await api.postOrderData(data);
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

