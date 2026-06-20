import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    app: userSlice,
    movie: movieSlice,
    searchMovies: searchSlice
  },
});
