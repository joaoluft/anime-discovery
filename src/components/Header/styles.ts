import { Typography } from "@mui/material";
import styled from "styled-components";
import LogoutIcon from '@mui/icons-material/Logout';

export const Container = styled.div`
  padding: 16px;
  background-color: #5b00a6;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Typography).attrs({
  variant: "h5",
})`
  color: #fff;
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