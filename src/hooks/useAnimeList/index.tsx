import { useApi } from "../useApi";
import { useContext, useEffect, useState } from "react";
import { Anime } from "../../interfaces/IAnime";
import { Anime as AnimeComponent } from "../../components/Anime";
import { useParameters } from "../useParameters";
import { useNavigate } from "react-router-dom";
import { Animes } from "../../interfaces/Animes/iAnimes";
import { FilterContext } from "../../contexts/FilterContext";
import { NotFoundAnimes } from "../../components/NotFoundAnimes";

export const useAnimeList = () => {
  const { getParam, setParam } = useParameters();

  const [animeList, setAnimeList] = useState<Animes>({
    data: [],
    pagination: 1,
    total: 0, // Total de páginas
  });

  const { filters } = useContext(FilterContext);

  const navigate = useNavigate();

  const [loaded, setLoaded] = useState<boolean>(false);

  const { getAnimeList } = useApi();

  const fetchAnimesList = (
    pagination: number,
    type: string,
    order: string,
    rating: string
  ) => {
    const typeParam = getParam("type") || type;
    const orderParam = getParam("order") || order;
    const ratingParam = getParam("rating") || rating;

    getAnimeList(pagination, typeParam, orderParam, ratingParam)
      .then((res) => {
        setLoaded(true);
        const listedAnimes = res?.data?.data?.map((animeData: Anime) => ({
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
    fetchAnimesList(page, filters.type, filters.order, filters.rating);
    setAnimeList((prevList) => ({ ...prevList, pagination: page }));
    setLoaded(false);
  };

  const renderAnimes = () => {
    if (animeList?.data?.length === 0 && !animeList) return <NotFoundAnimes />
    return animeList?.data?.map((anime) => (
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

    if (pageParam)
      return fetchAnimesList(
        Number(pageParam),
        filters.type,
        filters.order,
        filters.rating
      );

    fetchAnimesList(
      animeList.pagination,
      filters.type,
      filters.order,
      filters.rating
    );
    setParam("page", "1");
  }, [animeList.pagination, filters]);

  return {
    loaded,
    animeList,
    setPage,
    renderAnimes,
  };
};
