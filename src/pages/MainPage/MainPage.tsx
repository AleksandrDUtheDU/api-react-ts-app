import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Pagination, Stack, Grid } from "@mui/material";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { useAppDispath } from "../../shared/hooks/useAppDispath";
import { fetchFilmsThunk } from "../../shared/api/store/redusers/fethFilmsThunk";
import { FilmCard } from "../../entities/FilmCart/FilmCart";

export default function MainPage() {
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
