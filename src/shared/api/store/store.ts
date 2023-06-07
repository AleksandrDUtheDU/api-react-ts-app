import { configureStore, combineReducers } from "@reduxjs/toolkit";
import filmsReducer from "./reducers/FilmsSlice";

const rootReducer = combineReducers({ filmsReducer });

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
