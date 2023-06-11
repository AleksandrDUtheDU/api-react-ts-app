import {
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  Card,
  Typography,
} from "@mui/material";
import { useFetchIDFilmQuery } from "../../shared/api/services";
import { useCurrentPathArr } from "../../shared/hooks/useCurrentPathArr";
import { FavortButton } from "../../entities/FavortButton/FavortButton";

export default function FilmInfoPage() {
  const pathArr = useCurrentPathArr();
  const {
    data: film,
    isLoading,
    error,
  } = useFetchIDFilmQuery(pathArr[pathArr.length - 1]);

  return (
    <>
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>Ошибка загрузки!</h1>}
      {film && (
        <Card sx={{ maxWidth: "100%" }}>
          <CardHeader
            title={
              <Typography variant="h3" color="text.secondary">
                {film.data.nameRu}
              </Typography>
            }
            subheader={
              <Typography variant="h6" color="text.secondary">
                {`англ. ${film.data.nameEn || "нет"}, год выхода: ${
                  film.data.year
                } продолжительность фильма: ${film.data.filmLength} `}
              </Typography>
            }
          />
          <CardMedia
            component="img"
            height="100%"
            image={film.data.posterUrl}
            alt={film.data.nameRu}
          />
          <CardContent>
            <Typography variant="h6" color="text.secondary">
              {film.data.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {film.data && <FavortButton film={film.data} />}
          </CardActions>
        </Card>
      )}
    </>
  );
}
