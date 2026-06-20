import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieName: null,

  SearchMovie: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchMoviesDetails: (state, action) => {
      const { searchMovie, movies } = action.payload;
      state.movieName = searchMovie;
      state.SearchMovie = movies;
    },
  },
});

export const { setSearchMoviesDetails } = searchSlice.actions;

export default searchSlice.reducer;
