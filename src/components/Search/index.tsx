import { Autocomplete, TextField } from "@mui/material";
import { useSearch } from "../../hooks/useSearch";
import { Container } from "./styles";

export const Search = () => {
  const { searchAnimeHandler, result, selectOptionHandler } = useSearch();

  return (
    <Container>
      <Autocomplete
        options={result}
        onChange={(_, v: any) => selectOptionHandler(v.value)}
        noOptionsText="Nenhum anime encontrado"
        renderInput={(params) => (
          <TextField
            color="secondary"
            onChange={searchAnimeHandler}
            {...params}
            label="Buscar por títulos"
          />
        )}
      />
    </Container>
  );
};
