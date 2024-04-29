import { useApi } from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { HttpsResponse } from "../../interfaces";

export const useAnimeList = () => {
  const [animeList, setAnimeList] = useState<{
    data: any[]; 
    pagination: { last_visible_page: number };
  }>({
    data: [],
    pagination: { last_visible_page: 1 },
  });

  const { getAnimeList } = useApi();

  useEffect(() => {
    getAnimeList()
      .then((res: HttpsResponse<{ data: any[], pagination: { last_visible_page: number } }>) => {
        setAnimeList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return {
    animeList
  };
};