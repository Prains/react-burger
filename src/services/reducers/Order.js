import { createSlice } from "@reduxjs/toolkit";

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
});

export const { setOrder } = OrderSlice.actions;
export default OrderSlice.reducer;
