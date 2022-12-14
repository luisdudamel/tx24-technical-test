import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  z-index: 2;
  top: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 40px;
  padding: 5px 10px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.appBackground};
  @media (min-width: 769px) {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${({ theme }) => theme.colors.headerBackground};
  }

  .theme {
    &__container {
      margin-right: 20px;
      color: ${({ theme }) => theme.colors.mainColor};
      display: flex;
      gap: 20px;
      align-items: center;
    }
    &__icon {
      cursor: pointer;
    }
  }

  .logo__container {
    @media (min-width: 769px) {
      padding-left: 10px;
      flex: 1;
    }
  }
`;

export const StyledLogo = styled.img`
  width: 50px;
  cursor: pointer;
`;

export const StyledHamburger = styled.div`
  padding-right: 10px;

  .hamburger_bread {
    top: 0px;
    left: 0px;
    position: relative;
    background-color: ${({ theme }) => theme.colors.mainColor};
    height: 2px;
    width: 1.7em;
    margin-top: 4px;
    transition: all 0.4s;
  }
  .hamburger_meat {
    background-color: ${({ theme }) => theme.colors.mainColor};
    height: 2px;
    width: 1.7em;
    margin-top: 4px;
    transition: all 0.2s;
  }
`;

export const StyledLogin = styled.p`
  font-family: "Sansation Light";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.05em;
  padding-right: 30px;
  color: ${({ theme }) => theme.colors.mainText};

  span {
    color: ${({ theme }) => theme.colors.mainColor};
    cursor: pointer;
  }
`;
