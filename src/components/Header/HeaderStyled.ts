import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 40px;
  padding: 5px 10px;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

export const StyledLogo = styled.img`
  width: 50px;
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
