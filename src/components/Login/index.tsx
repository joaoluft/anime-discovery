import {
  Main,
  Title,
  RightContainer,
  LoginButton,
  LoginTextField,
  Paragraph,
  LeftContainer,
  LeftBackground,
  FieldContainer,
  PoweredBy,
} from "./styles";
import rocketLogo from "./../../assets/rocket.png";
import { useLogin } from "../../hooks/useLogin";

export const Login = () => {
  const { background } = useLogin();

  return (
    <Main>
      <LeftContainer>
        <LeftBackground src={background} />
      </LeftContainer>
      <RightContainer>
        <FieldContainer>
          <Title>Anime Discovery</Title>
          <LoginTextField></LoginTextField>
          <LoginButton>Continuar</LoginButton>
          <Paragraph>
            *Para acessar a lista de animes insira seu nome para continuar
          </Paragraph>
        </FieldContainer>

        <PoweredBy src={rocketLogo} />
      </RightContainer>
    </Main>
  );
};

/* 

<Box
      component="section"
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" component="h2">
        Anime Discovery
      </Typography>
    </Box>

*/
