import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    shows: [],
    favorites: []
  },

  

  reducers: {

    setShows: (state, action) => {
      state.shows = action.payload;
    },

    appendShows: (state, action) => {
      state.shows = [...state.shows, ...action.payload];
    },

    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },

    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        movie => movie.id !== action.payload
      );
    }

  },

  initialState: {
  shows: [],
  favorites: [],
  history: []
  },

  addHistory: (state, action) => {
  const exists = state.history.find(
    movie => movie.id === action.payload.id
  );

  if (!exists) {
    state.history.unshift(action.payload);
  }
},


});

export const {
  setShows,
  appendShows,
  addFavorite,
  removeFavorite,
  addHistory
} = movieSlice.actions;


export default movieSlice.reducer;