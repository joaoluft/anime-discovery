import { useAnime } from "../../hooks/useAnime";
import {
  Container,
  Title,
  Image,
  Rank,
  Informations,
  LikeAction,
  UnlikedIcon,
  LikedIcon
} from "./styles";

type AnimeProps = {
  id: number;
  thumbnail: string;
  rank: number;
  name: string;
  open: () => void;
};

export const Anime = ({ id, thumbnail, rank, name, open }: AnimeProps) => {
  const { liked, likeAnimeHandler } = useAnime(id);

  return (
    <Container key={id}>
      <Image onClick={open} src={thumbnail} alt={name} />
      <Rank>#{rank}</Rank>
      <Informations>
        <Title>{name}</Title>
        <LikeAction onClick={() => likeAnimeHandler(id)}>
          {liked ? <LikedIcon /> : <UnlikedIcon />}
        </LikeAction>
      </Informations>
    </Container>
  );
};
