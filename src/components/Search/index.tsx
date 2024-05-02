import { Autocomplete, TextField } from "@mui/material";
import { useSearch } from "../../hooks/useSearch";

export const Search = () => {
  const { searchAnimeHandler, result, selectOptionHandler } = useSearch();

  return (
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
  );
};
