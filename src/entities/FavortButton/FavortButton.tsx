import { FC, useState } from "react";
import { IconButton } from "@mui/material";
import { Film } from "../../shared/api/store/model/IApiFilmsResponse";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispath } from "../../shared/hooks/useAppDispath";
import { useUserAuth } from "../../shared/firebase";
import {
  addToFavorite,
  removeFavorite,
} from "../../shared/api/store/redusers/FavoriteSlise/FavoriteSlise";

export const FavortButton: FC<{ film: Film }> = ({ film }) => {
  const [favorites, setFavorites] = useState(false);
  const dispatch = useAppDispath();
  const { user } = useUserAuth();

  const addFavorites = () => {
    dispatch(addToFavorite(film));
    setFavorites(true);
  };

  const removeFavorites = () => {
    dispatch(removeFavorite(film));
    setFavorites(false);
  };

  return favorites && user ? (
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
