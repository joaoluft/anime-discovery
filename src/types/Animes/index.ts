import { Anime } from "./../Anime"

export type Animes = {
  data: Anime[];
  pagination: number;
  next: boolean;
  total: number;
};