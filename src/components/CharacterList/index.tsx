import { useCharacterList } from "../../hooks/useCharacterList";
import { Container } from "./styles";
import { Button } from "@mui/material";
import { CircularProgress } from "@mui/material";

type CharactersProps = {
  id: number;
};

export const CharacterList = ({ id }: CharactersProps) => {
  const { renderCharacterList, viewMore, setViewMore, loaded } = useCharacterList(id);

  return (
    <>
      <Container>{loaded ? renderCharacterList() : <CircularProgress color="secondary" />}</Container>
      <Button onClick={() => setViewMore(prevViewMore => !prevViewMore)} color="secondary" variant="contained" disableElevation>
        {viewMore ? "Ver menos personagens" : "Ver todos personagens"}
      </Button>
    </>
  );
};
