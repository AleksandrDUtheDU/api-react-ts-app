import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { customMiddleware } from "../middleware/customMiddleware";
import { customMiddlewareAddHistory } from "../middleware/customMiddlewareAdd";
import filmsReducer from "./redusers/FilmsSlise";
import { filmAPIFilm, filmAPISearch } from "../services";

const rootReducer = combineReducers({
  filmsReducer,
  [filmAPIFilm.reducerPath]: filmAPIFilm.reducer,
  [filmAPISearch.reducerPath]: filmAPISearch.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(
      filmAPIFilm.middleware,
      filmAPISearch.middleware,
      customMiddleware,
      customMiddlewareAddHistory
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
