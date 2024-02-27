import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideos: null,
    trendingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addtrailerVideos: (state, action) => {
      state.trailerVideos = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addtrailerVideos,
  addTrendingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
