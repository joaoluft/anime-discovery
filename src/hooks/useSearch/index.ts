import { useState, useEffect } from "react";
import { useApi } from "../useApi"
import { useNavigate } from "react-router-dom";

export const useSearch = () => {
  const { searchAnime } = useApi();
  const [typeTiming, setTypeTiming] = useState<number | null>(null);
  const [result, setResult] = useState<any>([])
  const navigate = useNavigate();

  const searchAnimeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypeTiming(setTimeout(() => {
      searchAnime(e.target.value).then((res) => {
        console.log(res)
        const completeOptions = res?.data?.data.map((anime: any) => {
          return { label: anime.title, value: anime.mal_id }
        })
        setResult(completeOptions)
      }).catch((err) => {
        console.log(err)
      });
    }, 500));
  }

  useEffect(() => {
    return () => {
      if (typeTiming) clearTimeout(typeTiming);
    };
  }, [typeTiming]);

  const selectOptionHandler = (id: number) => {
    navigate(`/anime/${id}`)
  }

  return { searchAnimeHandler, result, selectOptionHandler }
}