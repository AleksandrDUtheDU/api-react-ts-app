import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilmsState } from "../model/iFilmState";
import { Film } from "../model/IFilmResponse";
import { fetchFilmsThunk } from "./fetchFilms";

const initialState: FilmsState = {
  films: [],
  isLoading: false,
  error: "",
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFilmsThunk.fulfilled.type]: (
      state,
      action: PayloadAction<Film[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.films = action.payload;
    },
    [fetchFilmsThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchFilmsThunk.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default filmsSlice.reducer;
