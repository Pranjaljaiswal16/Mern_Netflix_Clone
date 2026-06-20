import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovie: null,
  popularMovies: null,
  topRatedMovies: null,
  upcomingMovies: null,
  searchMovie: false,
  trailerMovie: null,
  open: false,
  id: "",
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getnowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },

    getpopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    gettopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

    getUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },

    setsearchMovie: (state) => {
      state.searchMovie = !state.searchMovie;
    },

    getTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },

    setOpen: (state, action) => {
      state.open = action.payload;
    },

    getId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const {
  getnowPlayingMovie,
  getpopularMovies,
  gettopRatedMovies,
  getUpcomingMovies,
  setsearchMovie,
  getTrailerMovie,
  setOpen,
  getId
} = movieSlice.actions;

export default movieSlice.reducer;
