import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchOrderNumber } from "../actions";

interface OrderState {
  order: string | null;
  status: "loading" | "resolved" | null;
  error: string | null;
}

const initialState: OrderState = {
  order: null,
  status: null,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<string>) => {
      state.order = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderNumber.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchOrderNumber.fulfilled, (state, action) => {
        state.status = "resolved";
        state.order = action.payload;
      });
  },
});

export const { setOrder } = orderSlice.actions;
export default orderSlice.reducer;
