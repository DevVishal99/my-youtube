import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
import youtubeReducer from "./youtubeSlice";
import chatReducer from "./chatSlice"

const appStore = configureStore({
  reducer: {
    toggle: toggleReducer,
    youtube: youtubeReducer,
    chat : chatReducer,
  },
});

export default appStore;
