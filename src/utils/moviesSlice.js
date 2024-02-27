import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideos: null,
    trendingMovies: null,
    popularMovies: null,
    upcomingMovies:null
  },
  reducers: {
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addtrailerVideos: (state, action) => {
      state.trailerVideos = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    }
  },
});
export const {
  addNowPlayingMovies,
  addtrailerVideos,
  addTrendingMovies,
  addPopularMovies,
  addUpcomingMovies
} = moviesSlice.actions;
export default moviesSlice.reducer;
