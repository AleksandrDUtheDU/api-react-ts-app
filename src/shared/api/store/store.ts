import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { customMiddleware } from "../middleware/customMiddleware";
import { customMiddlewareAddHistory } from "../middleware/customMiddlewareAdd";
import filmsReducer from "./redusers/FilmsSlise";
import { filmAPI } from "../services/filmApi";

const rootReducer = combineReducers({
  filmsReducer,
  [filmAPI.reducerPath]: filmAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(
      filmAPI.middleware,
      customMiddleware,
      customMiddlewareAddHistory
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
