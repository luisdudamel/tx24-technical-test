import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { light } from "../../styles/Theme.styled";
import Header from "./Header";

describe("Given a Header function", () => {
  describe("When invoked", () => {
    test("Then it should render an image with the alternative text `Tx24 logo`", () => {
      const expectedAlternativeText = "Tx24 logo";

      render(
        <ThemeProvider theme={light}>
          <Header width={768} />
        </ThemeProvider>
      );

      const logoImage = screen.getByAltText(expectedAlternativeText);

      expect(logoImage).toBeInTheDocument();
    });
  });
});
