import { FC } from "react";
import { Link } from "react-router-dom";
import {
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
  Avatar,
  Card,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { red } from "@mui/material/colors";
import { Film } from "../../shared/api/store/model/IApiFilmsResponse";

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
      <Box component={Link} to={`${filmId}`} sx={{}}>
        <CardMedia
          component="img"
          height="500"
          image={posterUrl}
          alt={nameRu}
        />
      </Box>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
