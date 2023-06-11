import { useState, ChangeEventHandler } from "react";
import { Container, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDebounce } from "../../shared/hooks/useDebounse";
import { useFetchToStringFilmQuery } from "../../shared/api/services/filmApi";

export function SearchBar() {
  const [value, setValue] = useState<string>("");

  const debouncedValue = useDebounce<string>(value, 1000);

  const { data } = useFetchToStringFilmQuery([debouncedValue, 1]);
  console.log(data);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 20 }}>
      <TextField
        id="search"
        type="search"
        label="Search"
        value={value}
        onChange={handleChange}
        sx={{ width: 600 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}
