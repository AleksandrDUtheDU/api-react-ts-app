import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IHistoryItem } from "../../../services/IHistoryItem";

const favoritesSlice = createSlice({
  name: "history",
  initialState: [] as IHistoryItem[],
  reducers: {
    addToHistory(state, action: PayloadAction<IHistoryItem>) {
      const isAdd = state.find((item) => {
        return action.payload.time === item.time;
      });
      if (!isAdd) {
        state.push(action.payload);
      }
    },
  },
});

export const { addToHistory } = favoritesSlice.actions;
export const history = favoritesSlice.reducer;
