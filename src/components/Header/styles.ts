import styled from "styled-components";
import LogoutIcon from '@mui/icons-material/Logout';

export const Container = styled.div`
  padding: 16px;
  background-color: #5b00a6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto';
`;

export const Title = styled.h1`
  color: #fff;
  font-weight: 500;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

export const ExitIcon = styled(LogoutIcon)`
  color: #fff;
  cursor: pointer;
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`