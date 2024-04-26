import {
  Main,
  Title,
  RightContainer,
  LoginButton,
  LoginTextField,
  Paragraph,
  LeftContainer,
  LeftBackground,
  FieldForm,
  PoweredBy,
} from "./styles";
import rocketLogo from "./../../assets/rocket.png";
import { useLogin } from "./../../hooks/useLogin";

export const Login = () => {
  const { background, name, setName, loginFormHandler } = useLogin();

  return (
    <Main>
      <LeftContainer>
        <LeftBackground src={background} />
      </LeftContainer>
      <RightContainer>
        <FieldForm onSubmit={(e) => loginFormHandler(e)}>
          <Title>Anime Discovery</Title>
          <LoginTextField value={name} onChange={(e) => setName(e.target.value)}></LoginTextField>
          <LoginButton type="submit">Continuar</LoginButton>
          <Paragraph>
            *Para acessar a lista de animes insira seu nome para continuar
          </Paragraph>
        </FieldForm>

        <PoweredBy src={rocketLogo} />
      </RightContainer>
    </Main>
  );
};
