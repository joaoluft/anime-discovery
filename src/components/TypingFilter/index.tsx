import { InputLabel, MenuItem, Select } from "@mui/material";
import { Container } from "./styles";
import { useFilters } from "../../hooks/useFilters";
import { useParameters } from "../../hooks/useParameters";

export const TypingFilter = () => {
  const { setFilterHandler } = useFilters();
  const { getParam } = useParameters();
  return (
    <Container>
      <InputLabel color="secondary" id="demo-simple-select-standard-label">
        Tipo
      </InputLabel>
      <Select
        color="secondary"
        value={getParam("type") ?? ""}
        label="Tipo"
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        onChange={(e: any) => setFilterHandler("type", e)}
      >
        <MenuItem value="">
          <em>Nenhum</em>
        </MenuItem>
        <MenuItem value={"tv"}>TV</MenuItem>
        <MenuItem value={"movie"}>Filme</MenuItem>
        <MenuItem value={"ova"}>OVA</MenuItem>
        <MenuItem value={"special"}>Especial</MenuItem>
        <MenuItem value={"ona"}>ONA</MenuItem>
        <MenuItem value={"music"}>Musical</MenuItem>
        <MenuItem value={"cm"}>CM</MenuItem>
        <MenuItem value={"pv"}>PV</MenuItem>
        <MenuItem value={"tv_special"}>Especial de TV</MenuItem>
      </Select>
    </Container>
  );
};
