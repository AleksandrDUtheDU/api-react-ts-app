import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Film } from "../../model/IApiFilmsResponse";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [] as Film[],
  reducers: {
    addToFavorite(state, action: PayloadAction<Film>) {
      const isAdd = state.find((film) => {
        return action.payload.filmId === film.filmId;
      });
      if (!isAdd) {
        state.push(action.payload);
      }
    },
    removeFavorite(state, action: PayloadAction<Film>) {
      const indexOfObject = state.findIndex((obj: Film) => {
        return obj.filmId === action.payload.filmId;
      });
      state.splice(indexOfObject, 1);
    },
  },
});

export const { addToFavorite, removeFavorite } = favoritesSlice.actions;
export const favorite = favoritesSlice.reducer;
