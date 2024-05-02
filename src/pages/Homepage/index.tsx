import { useHomepage } from "../../hooks/useHomepage";
import { Header } from "../../components/Header";
import { AnimeList } from "../../components/AnimeList";
import { Filters } from "../../components/Filters";
import { FilterContextProvider } from "../../contexts/FilterContext";
import {
  FilterTitle,
  FilterContainer,
  ResultTitle,
  ResultContainer,
} from "./styles";

export const Homepage = () => {
  const { getUserAlias, user } = useHomepage();

  return (
    <FilterContextProvider>
      <Header name={getUserAlias(user?.name || "")} />
      <FilterContainer>
        <FilterTitle>Filtragem</FilterTitle>
        <Filters />
      </FilterContainer>
      <ResultContainer>
        <ResultTitle>Resultados encontrados:</ResultTitle>
        <AnimeList />
      </ResultContainer>
    </FilterContextProvider>
  );
};
