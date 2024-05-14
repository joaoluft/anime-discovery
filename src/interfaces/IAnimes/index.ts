import { IAnime } from "../IAnime"

export interface IAnimes {
  data: IAnime[];
  pagination: number;
  total: number;
};