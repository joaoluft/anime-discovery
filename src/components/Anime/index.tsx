import { Container, Title, Image, Rank } from "./styles";

type AnimeProps = {
  thumbnail: string;
  rank: number;
  name: string;
  onClick: () => void;
};

export const Anime = ({thumbnail, rank, name, onClick}: AnimeProps) => {
  return (
    <Container onClick={onClick}>
      <Image src={thumbnail} alt={name} />
      <Rank>#{rank}</Rank>
      <Title>{name}</Title>
    </Container>
  );
};
