import { FC } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { Film } from "../../shared/api/store/model/IApiFilmsResponse";

interface FilmCardProps {
  film: Film;
}

export const FilmCard: FC<FilmCardProps> = ({ film }) => {
  const { nameRu, nameEn, year, filmLength, rating, posterUrl } = film;

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
      <CardMedia component="img" height="500" image={posterUrl} alt={nameRu} />
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
