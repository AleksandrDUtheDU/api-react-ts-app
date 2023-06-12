import { FC } from "react";
import { Link } from "react-router-dom";
import {
  CardHeader,
  CardMedia,
  CardActions,
  Avatar,
  Card,
  Box,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { Film } from "../../shared/api/store/model/IApiFilmsResponse";
import { FavortButton } from "../FavortButton/FavortButton";

interface FilmCardProps {
  film: Film;
  favoritHandler?: () => Promise<void>;
}

export const FilmCard: FC<FilmCardProps> = ({ film }) => {
  const { filmId, nameRu, nameEn, year, filmLength, rating, posterUrl } = film;

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500], width: 65, height: 65 }}
            aria-label="recipe"
          >
            {rating || "--"}
          </Avatar>
        }
        title={nameRu}
        subheader={`англ. ${
          nameEn || "нет"
        }, год выхода: ${year} продолжительность фильма: ${filmLength} `}
      />
      <Box component={Link} to={`/${filmId}`} sx={{}}>
        <CardMedia
          component="img"
          height="500"
          image={posterUrl}
          alt={nameRu}
        />
      </Box>
      <CardActions disableSpacing>
        <FavortButton film={film} />
      </CardActions>
    </Card>
  );
};
