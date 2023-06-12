import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Pagination, Stack, Grid } from "@mui/material";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { useAppDispath } from "../../shared/hooks/useAppDispath";
import { fetchFilmsThunk } from "../../shared/api/store/redusers/FilmsSlise/fethFilmsThunk";
import { FilmCard } from "../../entities/FilmCart/FilmCart";
import { useLocalSorageFavorits } from "../../shared/hooks/useLocalSorageFavorits";

export default function FavoritsPage() {
  const dispatch = useAppDispath();
  useLocalSorageFavorits();

  const favorite = useAppSelector((state) => state.favorite);

  const cartItems = favorite.map((film) => (
    <Grid item xs={2} sm={4} md={4} key={film.filmId}>
      <FilmCard film={film} />
    </Grid>
  ));

  return (
    <Container sx={{ mt: 10 }} component="main" maxWidth="lg">
      {/* {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>} */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 8 }}
      >
        {favorite && cartItems}
      </Grid>
    </Container>
  );
}
