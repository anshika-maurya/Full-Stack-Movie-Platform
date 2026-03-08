import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./moviesSlice";

const store = configureStore({
  reducer: {
    movies: movieReducer
  }
});

export default store;