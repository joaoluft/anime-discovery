import { Button, ButtonProps, TextField, TextFieldProps } from "@mui/material";
import styled from "styled-components";

export const LoginButton = styled(Button).attrs({
  variant: "contained",
  color: "secondary",
}) <ButtonProps>``;

export const LoginTextField = styled(TextField).attrs({
  variant: "outlined",
  label: "Insira seu nome",
  color: "secondary",
}) <TextFieldProps>``;

export const Main = styled.main`
  display: flex;
  height: 100vh;
`;

export const Paragraph = styled.p`
  font-size: 0.8rem;
  color: #3b3b3b;
`;

export const LeftContainer = styled.div`
  flex-basis: 60%;
  overflow: hidden;
  box-shadow: 8px 0px 26px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LeftBackground = styled.img`
  background-size: cover;
  height: 100vh;
`;

export const RightContainer = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  text-align: center;
  padding: 64px 0 42px 0;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const FieldForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 80%;
`;

export const Title = styled.h1`
  padding-bottom: 24px;
  font-size: 2.5rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const PoweredBy = styled.img`
  width: 180px;
`;
