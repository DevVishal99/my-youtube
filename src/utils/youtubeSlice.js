import { createSlice } from "@reduxjs/toolkit";

const youtubeSlice = createSlice({
  name: "youtube",
  initialState: {
    popularVideos: null,
    searchResults: [],
    cacheResults : {}

  },
  reducers: {
    addPopularVideos: (state, action) => {
      state.popularVideos = action.payload;
    },
    addSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    addCacheResults: (state, action) => {
      state.cacheResults = {...action.payload, ...state.cacheResults};
    },
  },
});

export const { addPopularVideos, addSearchResults, addCacheResults} = youtubeSlice.actions;
export default youtubeSlice.reducer;
