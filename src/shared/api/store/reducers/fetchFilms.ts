import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL_TOP_FILMS, API_KEY } from "../apiKeys/apiKeys";
import { FilmsResponse } from "../model/IFilmResponse";

const config = {
  headers: {
    accept: "application/json",
    "X-API-KEY": API_KEY,
  },
};

export const fetchFilmsThunk = createAsyncThunk(
  "films/fetchAll",
  async (page: number, thunkAPI) => {
    try {
      const response = await axios.get<FilmsResponse>(
        URL_TOP_FILMS + page,
        config
      ); // так же можно ? (неявное приведение) TS не ругается
      return response.data.films;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалозь загрузить страницу");
    }
  }
);
