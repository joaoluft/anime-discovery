import { useApi } from "../useApi";
import { useEffect, useState } from "react";
import { Anime } from "../../types/Anime";
import { Anime as AnimeComponent } from "../../components/Anime";
import { useParameters } from "../useParameters";
import { useNavigate } from "react-router-dom";

type Animes = {
  data: Anime[];
  pagination: number;
  next: boolean;
  total: number;
};

export const useAnimeList = () => {
  const [animeList, setAnimeList] = useState<Animes>({
    data: [],
    pagination: 1,
    next: true,
    total: 0, // Total de páginas
  });

  const navigate = useNavigate();

  const { getParam, setParam } = useParameters();

  const [loaded, setLoaded] = useState<boolean>(false);

  const { getAnimeList } = useApi();

  const fetchAnimesList = (pagination: number) => {
    getAnimeList(pagination)
      .then((res) => {
        setLoaded(true);
        const listedAnimes = res?.data?.data.map((animeData: Anime) => ({
          mal_id: animeData.mal_id,
          thumbnail: animeData.images.webp.image_url,
          title: animeData.title,
          rank: animeData.rank,
        }));

        const total = Math.round(
          res?.data?.pagination?.items?.total /
            res?.data?.pagination?.items?.per_page
        );

        setAnimeList((prevList) => ({
          ...prevList,
          total,
          data: listedAnimes,
        }));
      })
      .catch((err) => console.log(err));
  };

  const setPage = (page: number) => {
    fetchAnimesList(page);
    setAnimeList((prevList) => ({ ...prevList, pagination: page }));
    setLoaded(false);
  };

  const renderAnimes = () => {
    return animeList?.data.map((anime) => (
      <AnimeComponent
        key={anime.mal_id}
        id={anime.mal_id}
        name={anime.title}
        thumbnail={anime.thumbnail}
        rank={anime.rank}
        open={() => navigate(`/anime/${anime.mal_id}`)}
      />
    ));
  };

  useEffect(() => {
    const pageParam = getParam("page");
    if (pageParam !== null) return fetchAnimesList(Number(pageParam));
    fetchAnimesList(animeList.pagination);
    setParam("page", "1");
  }, [animeList.pagination]);

  return {
    loaded,
    animeList,
    setPage,
    renderAnimes,
  };
};
