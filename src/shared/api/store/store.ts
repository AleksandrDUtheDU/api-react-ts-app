import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { favorite } from "./redusers/FavoriteSlise/FavoriteSlise";
import { localStorageMiddleware } from "../middleware/localStorageMiddleware";
import filmsReducer from "./redusers/FilmsSlise/FilmsSlise";
import { filmAPIFilm, filmAPISearch } from "../services";
import { history } from "./redusers/HistorySlise/FavoriteSlise";

const rootReducer = combineReducers({
  filmsReducer,
  [filmAPIFilm.reducerPath]: filmAPIFilm.reducer,
  [filmAPISearch.reducerPath]: filmAPISearch.reducer,
  favorite,
  history,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(
      filmAPIFilm.middleware,
      filmAPISearch.middleware,
      localStorageMiddleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
