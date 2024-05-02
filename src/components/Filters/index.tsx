import { OrderFilter } from "../OrderFilter";
import { RatingFilter } from "../RatingFilter";
import { Search } from "../Search";
import { TypingFilter } from "../TypingFilter";
import { Container } from "./styles";

export const Filters = () => {
  return (
    <Container>
      <Search />
      <TypingFilter />
      <OrderFilter />
      <RatingFilter />
    </Container>
  );
};
