import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  border-radius: 8px;
  background-color: #e3e3e3;
  padding: 0 0 8px 0;
  font-family: 'Roboto';
  width: 200px;

  @media (max-width: 768px) {
    width: 150px;
  }
`

export const Informations = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const LikeAction = styled.div`
  cursor: pointer;
  padding-right: 8px;
`

export const UnlikedIcon = styled(FavoriteBorderIcon)`
  color: #4d4d4d;
`

export const LikedIcon = styled(FavoriteIcon)`
  color: #b50c00;
`

export const Title = styled.h1`
  padding: 8px 0 8px 0;
  font-size: 0.9rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 70%;
  color: #3b3b3b;
  padding-left: 12px;
`

export const Image = styled.img`
  width: 200px;
  height: 300px;
  object-fit: none;
  cursor: pointer;

  transition: 300ms filter;

  &:hover {
    filter: brightness(80%);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 250px;
  }
`

export const Rank = styled.span`
  position: absolute;
  top: 3%;
  left: 5%;
  font-size: 1rem;
  color: #ffff;
  font-weight: 900;
  background-color: #de8500;
  padding: 8px;
  border-radius: 6px;
`