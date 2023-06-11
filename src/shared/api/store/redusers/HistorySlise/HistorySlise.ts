import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IHistoryItem } from "./IHistoryItem";

const historySlice = createSlice({
  name: "history",
  initialState: [] as IHistoryItem[],
  reducers: {
    addedToHistory(state, action: PayloadAction<IHistoryItem>) {
      state.push(action.payload);
    },
  },
});

export const { addedToHistory } = historySlice.actions;
export const history = historySlice.reducer;
