import {
  StyledHamburger,
  StyledHeader,
  StyledLogin,
  StyledLogo,
} from "./HeaderStyled";

interface headerProps {
  width: number;
  theme: string;
  setTheme: (newTheme: string) => void;
}

const Header = ({ width, theme, setTheme }: headerProps): JSX.Element => {
  return (
    <StyledHeader>
      <StyledLogo
        src={`img/logos/logo-tx24${theme === "dark" ? "-dark" : ""}.svg`}
        alt="Tx24 logo"
      />
      <div className="theme__container">
        <img
          className="theme__icon"
          src={`img/icons/sun-${theme === "dark" ? "dark" : "light"}.svg`}
          height={20}
          alt="Sun theme icon"
          onClick={() => setTheme("dark")}
        />
        |
        <img
          className="theme__icon"
          src={`img/icons/moon-${theme === "dark" ? "dark" : "light"}.svg`}
          height={18}
          alt="Moon theme icon"
          onClick={() => setTheme("light")}
        />
      </div>
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
