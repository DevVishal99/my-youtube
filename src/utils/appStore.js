import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
import youtubeReducer from "./youtubeSlice";

const appStore = configureStore({
  reducer: {
    toggle: toggleReducer,
    youtube: youtubeReducer,
  },
});

export default appStore;
