import { useAnimeList } from "../../hooks/useAnimeList";
import { Anime } from "../Anime";
import { Container } from "./styles";
export const AnimeList = () => {
  const { animeList } = useAnimeList();
  console.log(animeList);
  const renderAnimes = () => {
    return animeList.data.map((anime) => (
      <Anime
        image={anime.images.webp.image_url}
        rank={anime.rank}
        name={anime.title}
      />
    ));
  };

  return <Container>{renderAnimes()}</Container>;
};
