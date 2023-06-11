import { useState, useEffect, ChangeEventHandler } from "react";
import {
  Pagination,
  Stack,
  Grid,
  Container,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import { FilmCard } from "../../entities/FilmCart/FilmCart";
import SearchIcon from "@mui/icons-material/Search";
import { useDebounce } from "../../shared/hooks/useDebounse";
import { useFetchIDFilmQuery } from "../../shared/api/services";

export default function FavoritsPage() {
  const [page, setPage] = useState(1);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <Container sx={{ mt: 10 }} component="main" maxWidth="lg">
      <Typography>Страница Избранное</Typography>
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
