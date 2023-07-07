import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BurgerState {
  burger: string[];
}

const initialState: BurgerState = {
  burger: [],
};

const BurgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    setBurger: (state, action: PayloadAction<string[]>) => {
      state.burger = action.payload;
    },
  },
});

export const { setBurger } = BurgerSlice.actions;
export default BurgerSlice.reducer;
