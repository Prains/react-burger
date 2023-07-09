import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ingredient } from '../../utils/types';

interface BurgerState {
  burger: Ingredient[];
}

const initialState: BurgerState = {
  burger: [],
};

const BurgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    setBurger: (state, action: PayloadAction<Ingredient[]>) => {
      state.burger = action.payload;
    },
  },
});

export const { setBurger } = BurgerSlice.actions;
export default BurgerSlice.reducer;
