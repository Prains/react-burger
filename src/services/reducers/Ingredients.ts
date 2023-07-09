import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchIngredients } from "../actions";
import { Ingredient } from "../../utils/types";

interface IngredientsState {
  ingredients: Ingredient[];
  status: "loading" | "resolved" | null;
  error: string | null;
}

const initialState: IngredientsState = {
  ingredients: [],
  status: null,
  error: null,
};

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    setIngredients: (state, action: PayloadAction<Ingredient[]>) => {
      state.ingredients = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.status = "resolved";
        state.ingredients = action.payload;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.status = "resolved";
        state.error = action.error.message as string;
      });
  },
});

export const { setIngredients } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
