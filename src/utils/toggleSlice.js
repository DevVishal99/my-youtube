import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    sideBarToggle: true,
    searchText: "",
    focus: true,
    dark: false,
  },
  reducers: {
    sideBarToggler: (state, action) => {
      state.sideBarToggle = !state.sideBarToggle;
    },
    watchToggler: (state, action) => {
      state.sideBarToggle = false;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setFocus: (state, action) => {
      state.focus = action.payload;
    },
    setDark: (state) => {
      state.dark = !state.dark;
    },
  },
});

export default toggleSlice.reducer;
export const { sideBarToggler, watchToggler, setSearchText, setFocus, setDark } =
  toggleSlice.actions;
