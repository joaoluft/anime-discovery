import { useEffect, useState } from "react";
import { useApi } from "../useApi"

interface AnimeDetail {
  mal_id: number
  title: string
  images: {
    webp: {
      image_url: string
    }
  }
  trailer: {
    images: {
      maximum_image_url: string | undefined
    }
  }
  synopsis: string
}
export const useAnimeDetails = (id: number) => {
  const { getAnimeDetails } = useApi();
  const [anime, setAnime] = useState<AnimeDetail>()

  useEffect(() => {
    getAnimeDetails(id).then((res) => {
      console.log(res)
      setAnime(res?.data?.data);
    }).catch((err) => console.log(err))

  }, [])
  return { anime }
}