import styled from "styled-components";
import defaultAnime from "./../../assets/default.webp"

interface BackgroundProps {
  $background: string | undefined;
}

export const Container = styled.div<BackgroundProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background-image: ${({ $background }) => $background ? `url(${$background})` : `url(${defaultAnime})`};
  background-size: cover;
  min-height: 100vh;
  
  background-color: rgba(0, 0, 0, 0.75);
  background-blend-mode: multiply;
  font-family: 'Roboto';
`;

export const Content = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 60%;
  gap: 32px;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`

export const Thumbnail = styled.img`
  width: 250px;
  border-radius: 16px;
`;

export const Synopsis = styled.p`
  color: #ffffff;
  text-align: center;
`

export const Title = styled.h1`
  color: #ffffff;
  text-align: center;
  font-size: 2rem;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const Back = styled.div`
  position: absolute;
  top: 5%;
  left: 2.5%;

  @media (max-width: 768px) {
    position: unset;
    margin-top: 32px;
  }
`