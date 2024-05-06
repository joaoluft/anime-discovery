import { Anime } from "../Anime/iAnime"

export interface Animes {
  data: Anime[];
  pagination: number;
  total: number;
};