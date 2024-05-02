import styled from "styled-components";

export const Container = styled.div`
  padding: 32px 12px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 32px 8px;
  }
`