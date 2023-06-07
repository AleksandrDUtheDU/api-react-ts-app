import { Container } from "@mui/material";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { useAppDispath } from "../../shared/hooks/useAppDispath";
import { useEffect, useState } from "react";
import { fetchFilmsThunk } from "../../shared/api/store/reducers/fetchFilms";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { FilmCard } from "../../entities/FilmCart/FilmCart";

export function MainPage() {
  const dispatch = useAppDispath();
  const { films, isLoading, error } = useAppSelector(
    (state) => state.filmsReducer
  );
  const [page, setPage] = useState(1);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(fetchFilmsThunk(page));
  }, [dispatch, page]);

  const cartItems = films.map((film) => (
    <Grid item xs={2} sm={4} md={4} key={film.filmId}>
      <FilmCard film={film} />
    </Grid>
  ));

  return (
    <Container sx={{ mt: 10 }} component="main" maxWidth="lg">
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 8 }}
      >
        {films && cartItems}
      </Grid>
      <Stack
        spacing={4}
        sx={{ mt: 4, alignItems: "center", justify: "center" }}
      >
        <Pagination
          size="large"
          count={10}
          page={page}
          onChange={handleChangePage}
        />
      </Stack>
    </Container>
  );
}
