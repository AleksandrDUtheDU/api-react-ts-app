import { useState, ChangeEventHandler } from "react";
import {
  Pagination,
  Stack,
  Grid,
  Container,
  TextField,
  InputAdornment,
} from "@mui/material";
import { FilmCard } from "../../entities/FilmCart/FilmCart";
import SearchIcon from "@mui/icons-material/Search";
import { useDebounce } from "../../shared/hooks/useDebounse";
import { useFetchToStringFilmQuery } from "../../shared/api/services/filmApi";

export default function SearchPage() {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 1000);

  const { data, isLoading, error } = useFetchToStringFilmQuery([
    debouncedValue,
    page,
  ]);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  const cartItems = data?.films.map((film) => (
    <Grid item xs={2} sm={4} md={4} key={film.filmId}>
      <FilmCard film={film} />
    </Grid>
  ));

  return (
    <Container sx={{ mt: 10 }} component="main" maxWidth="lg">
      <TextField
        fullWidth
        type="search"
        label="Поиск по названию"
        value={value}
        onChange={handleChange}
        sx={{ mb: 5 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>Ошибка загрузки</h1>}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 8 }}
      >
        {data?.films && cartItems}
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
