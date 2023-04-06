import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/api";

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
