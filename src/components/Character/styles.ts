import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

export const Image = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 2px solid #ffff;
`

export const Name = styled.h1`
  text-align: center;
  color: #fff;
`;