import { Container, Image, Name } from "./styles";

type CharacterProps = {
  id: string;
  image: string;
  name: string;
}

export const Character = ({image, name, id}: CharacterProps) => {
  return (
    <Container key={id}>
      <Image draggable={false} src={image} alt={name} />
      <Name>{name}</Name>
    </Container>
  )
}