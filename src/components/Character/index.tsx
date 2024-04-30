import { Container, Image, Name } from "./styles";

type CharacterProps = {
  key: string;
  image: string;
  name: string;
}

export const Character = ({image, name, key}: CharacterProps) => {
  return (
    <Container key={key}>
      <Image src={image} alt={name} />
      <Name>{name}</Name>
    </Container>
  )
}