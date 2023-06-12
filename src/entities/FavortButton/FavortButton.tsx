import { FC } from "react";
import { IconButton } from "@mui/material";
import { Film } from "../../shared/api/store/model/IApiFilmsResponse";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispath } from "../../shared/hooks/useAppDispath";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { useUserAuth } from "../../shared/firebase";
import {
  addToFavorite,
  removeFavorite,
} from "../../shared/api/store/redusers/FavoriteSlise/FavoriteSlise";

export const FavortButton: FC<{ film: Film }> = ({ film }) => {
  const dispatch = useAppDispath();
  const { user } = useUserAuth();
  const favorite = useAppSelector((state) => state.favorite);

  const isFavoriteStore = favorite.find((item) => {
    return item.filmId === film.filmId;
  });

  const addFavorites = () => {
    dispatch(addToFavorite(film));
  };

  const removeFavorites = () => {
    dispatch(removeFavorite(film));
  };

  return isFavoriteStore && user ? (
    <IconButton
      onClick={removeFavorites}
      color="error"
      aria-label="add to favorites"
    >
      <FavoriteIcon />
    </IconButton>
  ) : (
    <IconButton
      onClick={addFavorites}
      color="default"
      aria-label="remove to favorites"
    >
      <FavoriteIcon />
    </IconButton>
  );
};
