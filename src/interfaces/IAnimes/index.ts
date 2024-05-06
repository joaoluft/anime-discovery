import { Anime } from "../IAnime"

export interface Animes {
  data: Anime[];
  pagination: number;
  total: number;
};