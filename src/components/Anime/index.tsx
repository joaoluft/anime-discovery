import { Container, Title, Image, Rank } from "./styles";

type AnimeProps = {
  image: string;
  rank: number;
  name: string;
};

export const Anime = ({image, rank, name}: AnimeProps) => {
  return (
    <Container>
      <Image src={image} alt={name} />
      <Rank>#{rank}</Rank>
      <Title>{name}</Title>
    </Container>
  );
};
