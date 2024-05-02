import { useAnimeList } from "../../hooks/useAnimeList";
import { Pagination } from "../Pagination";
import { Container } from "./styles";
import { CircularProgress } from "@mui/material";
export const AnimeList = () => {
  const { animeList, renderAnimes, loaded, setPage } = useAnimeList();

  return (
    <>
      <Container>{loaded ? renderAnimes() : <CircularProgress color="secondary" />}</Container>
      <Pagination total={animeList.total} setPage={setPage} />
    </>
  );
};
