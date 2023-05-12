import { createSlice, configureStore } from "@reduxjs/toolkit";

// Определите слайс
const websocketSlice = createSlice({
  name: "websocket",
  initialState: { data: null, status: "idle" },
  reducers: {
    websocketReceived: (state, action) => {
      state.data = action.payload;
    },
    websocketRequested: (state) => {
      state.status = "loading";
    },
    websocketConnected: (state) => {
      state.status = "connected";
    },
    websocketDisconnected: (state) => {
      state.status = "disconnected";
    },
    websocketErrored: (state) => {
      state.status = "errored";
    },
  },
});

// Экспортируйте действия для использования вне слайса
export const {
  websocketReceived,
  websocketRequested,
  websocketConnected,
  websocketDisconnected,
  websocketErrored,
} = websocketSlice.actions;

export default websocketSlice.reducer;
