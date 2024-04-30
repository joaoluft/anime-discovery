import { Pagination as Paging } from "@mui/material";
import { Container } from "./styles";
import { useParameters } from "../../hooks/useParameters";

type PaginationProps = {
  total: number;
  setPage: (page: number) => void;
};

export const Pagination = ({ total, setPage }: PaginationProps) => {
  const { getParam, setParam } = useParameters();

  const changePageHandler = (page: number) => {
    setParam("page", page.toString());
    setPage(page);
  };

  return (
    <Container>
      <Paging
        color="secondary"
        count={total}
        defaultPage={1}
        page={getParam("page") ? Number(getParam("page")) : 1}
        onChange={(_, page) => changePageHandler(page)}
      />
    </Container>
  );
};
