import { Avatar } from "@mui/material";
import { Container, ExitIcon, Title, UserContainer } from "./styles";
import { pink } from "@mui/material/colors";
import { useLocalStorage } from "./../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

type HProps = {
  name: string;
};

export const Header: React.FC<HProps> = (props) => {
  const { deleteLocalStorage } = useLocalStorage();
  const navigate = useNavigate();

  const exitHandler = () => {
    deleteLocalStorage("user");
    navigate("/login");
  };

  return (
    <Container>
      <Title>Anime Discovery</Title>
      <UserContainer>
        <Avatar sx={{ bgcolor: pink[500], textTransform: "uppercase" }}>
          {props.name}
        </Avatar>
        <ExitIcon onClick={exitHandler} />
      </UserContainer>
    </Container>
  );
};
