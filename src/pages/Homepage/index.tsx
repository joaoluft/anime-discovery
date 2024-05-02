import { useHomepage } from "../../hooks/useHomepage";
import { Header } from "../../components/Header";
import { AnimeList } from "../../components/AnimeList";
import { Filters } from "../../components/Filters";

export const Homepage = () => {
  const { getUserAlias, user } = useHomepage();

  return (
    <>
      <Header name={getUserAlias(user?.name || "")} />
      <Filters />
      <AnimeList />
    </>
  );
};
