import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`