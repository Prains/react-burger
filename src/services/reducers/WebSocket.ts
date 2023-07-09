import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WebsocketState {
  data: any | null;
}

const initialState: WebsocketState = {
  data: null,
};

const websocketSlice = createSlice({
  name: "websocket",
  initialState,
  reducers: {
    websocketReceived: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { websocketReceived } = websocketSlice.actions;
export default websocketSlice.reducer;
