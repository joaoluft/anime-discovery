import { Button } from "@mui/material";
import styled from "styled-components";

interface BackgroundProps {
  $background: string | undefined;
}

export const Container = styled.div<BackgroundProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background-image: ${({ $background }) => `url(${$background})`};
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
`

export const Back = styled.div`
  position: absolute;
  top: 5%;
  left: 2.5%;
`