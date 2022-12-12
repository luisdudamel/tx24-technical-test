import {
  StyledHamburger,
  StyledHeader,
  StyledLogin,
  StyledLogo,
} from "./HeaderStyled";

interface headerProps {
  width: number;
  theme: string;
}

const Header = ({ width, theme }: headerProps): JSX.Element => {
  return (
    <StyledHeader>
      <StyledLogo
        src={`img/logos/logo-tx24${theme === "dark" ? "-dark" : ""}.svg`}
        alt="Tx24 logo"
      />
      {width <= 768 ? (
        <StyledHamburger>
          <div className="hamburger_bread"></div>
          <div className="hamburger_meat"></div>
          <div className="hamburger_bread"></div>
        </StyledHamburger>
      ) : (
        <StyledLogin>
          <span>Login </span> or <span> Register</span>
        </StyledLogin>
      )}
    </StyledHeader>
  );
};

export default Header;
