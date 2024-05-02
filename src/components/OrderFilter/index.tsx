import { InputLabel, MenuItem, Select } from "@mui/material";
import { Container } from "./styles";
import { useFilters } from "../../hooks/useFilters";
import { useParameters } from "../../hooks/useParameters";

export const OrderFilter = () => {
  const { setFilterHandler } = useFilters();
  const { getParam } = useParameters();
  return (
    <Container>
      <InputLabel color="secondary" id="demo-simple-select-standard-label">
        Ordem
      </InputLabel>
      <Select
        color="secondary"
        value={getParam("order") ?? ""}
        label="Ordem"
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        onChange={(e: any) => setFilterHandler("order", e)}
      >
        <MenuItem value="">
          <em>Nenhum</em>
        </MenuItem>
        <MenuItem value={"airing"}>Recentes</MenuItem>
        <MenuItem value={"upcoming"}>Lançamentos</MenuItem>
        <MenuItem value={"bypopularity"}>Popularidade</MenuItem>
      </Select>
    </Container>
  );
};
