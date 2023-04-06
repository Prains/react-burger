import { createSlice } from "@reduxjs/toolkit";
import { fetchOrderNumber } from "../actions";


const OrderSlice = createSlice({
  name: "order",
  initialState: {
    order: null,
  },
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },
  },
  extraReducers: {
    [fetchOrderNumber.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchOrderNumber.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.order = action.payload;
    },
  }
});

export const { setOrder } = OrderSlice.actions;
export default OrderSlice.reducer;
