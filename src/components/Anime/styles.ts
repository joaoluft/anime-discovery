import styled from "styled-components";

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
  cursor: pointer;
`

export const Title = styled.h1`
  padding: 8px 0 8px 0;
  font-size: 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 80%;
  color: #3b3b3b;
  text-align: center;
`

export const Image = styled.img`
  width: 200px;
  height: 300px;
  object-fit: none;
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