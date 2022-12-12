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
  goHome: (step: number) => void;
}

const Header = ({
  width,
  theme,
  setTheme,
  goHome,
}: headerProps): JSX.Element => {
  return (
    <StyledHeader>
      <div className="logo__container">
        <StyledLogo
          src={`img/logos/logo-tx24${theme === "dark" ? "-dark" : ""}.svg`}
          alt="Tx24 logo"
          onClick={() => goHome(1)}
        />
      </div>
      {width <= 768 ? (
        <>
          <div className="theme__container">
            <img
              className="theme__icon"
              src={`img/icons/sun-${theme === "dark" ? "dark" : "light"}.svg`}
              height={20}
              alt={`Sun theme icon ${theme === "dark" ? "dark" : "light"}`}
              onClick={() => setTheme("dark")}
            />
            |
            <img
              className="theme__icon"
              src={`img/icons/moon-${theme === "dark" ? "dark" : "light"}.svg`}
              height={18}
              alt={`Moon theme icon ${theme === "dark" ? "dark" : "light"}`}
              onClick={() => setTheme("light")}
            />
          </div>
          <StyledHamburger>
            <div className="hamburger_bread"></div>
            <div className="hamburger_meat"></div>
            <div className="hamburger_bread"></div>
          </StyledHamburger>
        </>
      ) : (
        <>
          <StyledLogin>
            <span>Login </span> or <span> Register</span>
          </StyledLogin>
          <div className="theme__container">
            <img
              className="theme__icon"
              src={`img/icons/sun-${theme === "dark" ? "dark" : "light"}.svg`}
              height={20}
              alt={`Sun theme icon ${theme === "dark" ? "dark" : "light"}`}
              onClick={() => setTheme("dark")}
            />
            |
            <img
              className="theme__icon"
              src={`img/icons/moon-${theme === "dark" ? "dark" : "light"}.svg`}
              height={18}
              alt={`Moon theme icon ${theme === "dark" ? "dark" : "light"}`}
              onClick={() => setTheme("light")}
            />
          </div>
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
