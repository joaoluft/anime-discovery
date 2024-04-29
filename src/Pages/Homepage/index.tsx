import { useHomepage } from "../../hooks/useHomepage";
import { Header } from "../../components/Header";
import { AnimeList } from "../../components/AnimeList";

export const Homepage = () => {
  const { getUserAlias, user } = useHomepage();

  return (
    <>
      <Header name={getUserAlias(user?.name || "")} />
      <AnimeList />
    </>
  );
};
