import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilmsState } from "../model/IFilmState";
import { Film } from "../model/IApiFilmsResponse";
import { fetchFilmsThunk } from "./fethFilmsThunk";

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
