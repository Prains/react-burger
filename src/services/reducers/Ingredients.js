import { createSlice } from "@reduxjs/toolkit";
import { fetchIngredients } from "../actions";

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: {
    ingredients: [],
    status: null,
    error: null,
  },
  reducers: {
    setIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
  },
  extraReducers: {
    [fetchIngredients.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchIngredients.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.ingredients = action.payload;
    },
    [fetchIngredients.rejected]: (state, action) => {
      
    },
  },
});

export const { setIngredients } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
