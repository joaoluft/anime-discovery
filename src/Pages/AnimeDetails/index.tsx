import { useParams } from "react-router-dom";
import { Thumbnail, Container, Synopsis, Title, Content, Back } from "./styles";
import { CharacterList } from "../../components/CharacterList";
import { useAnimeDetails } from "../../hooks/useAnimeDetails";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const AnimeDetails = () => {
  const { id } = useParams();
  const { anime } = useAnimeDetails(Number(id));
  const navigate = useNavigate();
  return (
    <Container $background={anime?.trailer?.images?.maximum_image_url}>
      <Back>
        <Button onClick={() => navigate(-1)} variant="contained" color="secondary" startIcon={<ArrowBackIcon />}>
          Voltar
        </Button>
      </Back>
      <Content>
        <Title>{anime?.title}</Title>
        <Thumbnail src={anime?.images.webp.image_url} />
        <Synopsis>{anime?.synopsis}</Synopsis>
        <CharacterList id={Number(id)} />
      </Content>
    </Container>
  );
};
