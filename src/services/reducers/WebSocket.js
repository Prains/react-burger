import { createSlice } from "@reduxjs/toolkit";

// Определите слайс
const websocketSlice = createSlice({
  name: "websocket",
  initialState: { data: null },
  reducers: {
    websocketReceived: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Экспортируйте действия для использования вне слайса
export const { websocketReceived } = websocketSlice.actions;

export default websocketSlice.reducer;
