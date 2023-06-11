import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { favorite } from "./redusers/FavoriteSlise/FavoriteSlise";
import { history } from "./redusers/HistorySlise/HistorySlise";
import { IsAuthMiddleware } from "../middleware/IsAuthMiddleware";
import { localStorageMiddleware } from "../middleware/localStorageMiddleware";
// import { customMiddleware } from "../middleware/customMiddleware";
import filmsReducer from "./redusers/FilmsSlise/FilmsSlise";
import { filmAPIFilm, filmAPISearch } from "../services";

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
      IsAuthMiddleware,
      localStorageMiddleware
      // customMiddleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
