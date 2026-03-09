import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",

  initialState: {
    movies: [],
    favorites: [],
    history: [],
  },

  reducers: {
    appendMovies: (state, action) => {
      state.movies = [...state.movies, ...action.payload];
    },

    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },

    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload,
      );
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
    },

    addHistory: (state, action) => {
      state.history.unshift(action.payload);
    },
  },
});

export const {
  appendMovies,
  addFavorite,
  setMovies,
  removeFavorite,
  addHistory,
} = movieSlice.actions;

export default movieSlice.reducer;
