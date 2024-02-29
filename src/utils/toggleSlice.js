import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    sideBarToggle: true,
  },
  reducers: {
    sideBarToggler: (state, action) => {
      state.sideBarToggle = !state.sideBarToggle;
    },
    watchToggler: (state, action) => {
      state.sideBarToggle = false;
    },
  },
});


export default toggleSlice.reducer;
export const {sideBarToggler,watchToggler} = toggleSlice.actions;