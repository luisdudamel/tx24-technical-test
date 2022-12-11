import {
  StyledHamburger,
  StyledHeader,
  StyledLogin,
  StyledLogo,
} from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <StyledLogo src="img/logo-tx24.svg" alt="Tx24 logo" />
      <StyledHamburger>
        <div className="hamburger_bread"></div>
        <div className="hamburger_meat"></div>
        <div className="hamburger_bread"></div>
      </StyledHamburger>
      <StyledLogin>
        <span>Login </span> or <span> Register</span>
      </StyledLogin>
    </StyledHeader>
  );
};

export default Header;
