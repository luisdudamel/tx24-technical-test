import { StyledHamburger, StyledHeader, StyledLogo } from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <StyledLogo src="img/logo-tx24.svg" alt="Tx24 logo" />
      <StyledHamburger>
        <div className="hamburger_bread"></div>
        <div className="hamburger_meat"></div>
        <div className="hamburger_bread"></div>
      </StyledHamburger>
    </StyledHeader>
  );
};

export default Header;
