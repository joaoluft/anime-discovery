import { InputLabel, MenuItem, Select } from "@mui/material";
import { Container } from "./styles";
import { useFilters } from "../../hooks/useFilters";
import { useParameters } from "../../hooks/useParameters";

export const RatingFilter = () => {
  const { setFilterHandler } = useFilters();
  const { getParam } = useParameters();
  return (
    <Container>
      <InputLabel color="secondary" id="demo-simple-select-standard-label">
        Classificação
      </InputLabel>
      <Select
        color="secondary"
        value={getParam("rating") ?? ""}
        label="Clasficação"
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        onChange={(e: any) => setFilterHandler("rating", e)}
      >
        <MenuItem value="">
          <em>Nenhum</em>
        </MenuItem>
        <MenuItem value={"g"}>Todas as idades</MenuItem>
        <MenuItem value={"pg"}>Crianças</MenuItem>
        <MenuItem value={"pg13"}>Acima de 13 anos</MenuItem>
        <MenuItem value={"r17"}>Violência e Palavrões</MenuItem>
        <MenuItem value={"r"}>Nudez leve</MenuItem>
        <MenuItem value={"rx"}>Hentai</MenuItem>
      </Select>
    </Container>
  );
};
