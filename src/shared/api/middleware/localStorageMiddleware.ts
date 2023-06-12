import { Middleware } from "redux";
import { auth } from "../../firebase/config/fairbase";
import { Film } from "../store/model/IApiFilmsResponse";
import { IHistoryItem } from "../services/IHistoryItem";
import {
  addToFavorite,
  removeFavorite,
} from "../store/redusers/FavoriteSlise/FavoriteSlise";

export const localStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    if (auth.currentUser?.email) {
      switch (action.type) {
        case addToFavorite.type:
          {
            const localStorageFavorites = localStorage.getItem(
              `${auth.currentUser?.email}/favorites`
            );
            if (localStorageFavorites) {
              const films: Film[] = JSON.parse(localStorageFavorites);
              const cheked = films.filter((film) => {
                return action.payload.filmId !== film.filmId;
              });
              cheked.push(action.payload);
              localStorage.setItem(
                `${auth.currentUser?.email}/favorites`,
                JSON.stringify(cheked)
              );
            } else {
              localStorage.setItem(
                `${auth.currentUser?.email}/favorites`,
                JSON.stringify([action.payload])
              );
            }
          }
          break;
        case removeFavorite.type:
          {
            const localStorageFavorites = localStorage.getItem(
              `${auth.currentUser?.email}/favorites`
            );
            if (localStorageFavorites) {
              const films: Film[] = JSON.parse(localStorageFavorites);
              const cheked = films.filter((film) => {
                return action.payload.filmId !== film.filmId;
              });
              localStorage.setItem(
                `${auth.currentUser?.email}/favorites`,
                JSON.stringify(cheked)
              );
            }
          }
          break;
        case "filmAPISearch/executeQuery/fulfilled":
          console.log(action.type);

          {
            const localStorageHistory = localStorage.getItem(
              `${auth.currentUser?.email}/history`
            );
            console.log("history");
            if (localStorageHistory) {
              const history: IHistoryItem[] = JSON.parse(localStorageHistory);
              history.push({
                serarchItem: action.payload.keyword,
                time: new Date().toString(),
              });
              localStorage.setItem(
                `${auth.currentUser?.email}/history`,
                JSON.stringify(history)
              );
            } else {
              localStorage.setItem(
                `${auth.currentUser?.email}/history`,
                JSON.stringify([
                  {
                    serarchItem: action.payload.keyword,
                    time: new Date().toString(),
                  },
                ])
              );
            }
          }
          break;
        default:
          break;
      }
    } else {
      switch (action.type) {
        case addToFavorite.type: {
          alert("Необходимо зарегестрироваться!");
          return null;
        }
        case removeFavorite.type: {
          alert("Необходимо зарегестрироваться!");
          return null;
        }
      }
    }
    next(action);
  };
