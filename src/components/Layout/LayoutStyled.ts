import styled from "styled-components";

export const MainStyledContainer = styled.main`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.appBackground};

  @media (min-width: 769px) {
    align-items: center;
  }
`;
