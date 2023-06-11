import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL_TOP_FILMS, API_KEY } from "../../../apiKeys/apiKeys";
import { ApiFilmsResponse } from "../../model/IApiFilmsResponse";

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
      const response = await axios.get<ApiFilmsResponse>(
        URL_TOP_FILMS + page,
        config
      );
      return response.data.films;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалозь загрузить страницу");
    }
  }
);
