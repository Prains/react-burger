import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCurrentUser } from "../actions";

interface UserState {
  user: string | null;
  status: "loading" | "resolved" | null;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  status: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.status = "resolved";
        state.user = action.payload;
      });
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
