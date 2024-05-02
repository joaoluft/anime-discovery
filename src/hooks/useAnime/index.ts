import { useEffect, useState } from "react";
import { useLocalStorage } from "../useLocalStorage"

export const useAnime = (id: number) => {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    const user = getLocalStorage("user");
    setLiked(user?.favs.some((anime: number) => anime === id));
  }, [])

  const likeAnimeHandler = (id: number) => {
    let oldUser = getLocalStorage("user");

    if (!liked) {
      oldUser.favs.push(id);
      setLiked(true);
    } else {
      oldUser.favs = oldUser?.favs.filter((anime: number) => anime !== id);
      setLiked(false);
    }

    setLocalStorage("user", oldUser);
  }

  return { liked, likeAnimeHandler }
}