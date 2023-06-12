import { useAppDispath } from "./useAppDispath";
import { useUserAuth } from "../firebase";
import { addToFavorite } from "../api/store/redusers/FavoriteSlise/FavoriteSlise";
import { Film } from "../api/store/model/IApiFilmsResponse";

export const useLocalSorageFavorits = () => {
  const dispatch = useAppDispath();
  const { user } = useUserAuth();

  if (user?.email) {
    const localFavorits = localStorage.getItem(`${user.email}/favorites`);
    if (localFavorits) {
      const films: Film[] = JSON.parse(localFavorits);
      films.forEach((film) => {
        dispatch(addToFavorite(film));
      });
    }
  }
};
