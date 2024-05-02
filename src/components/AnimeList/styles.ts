import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100vh;
  padding: 24px 0;

  @media (max-width: 768px) {
    padding: 32px 8px;
  }
`