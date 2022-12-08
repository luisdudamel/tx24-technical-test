import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { light } from "../../styles/Theme.styled";
import Layout from "./Layout";

describe("Given a Layout function", () => {
  describe("When invoked", () => {
    test("Then it should render an image with the alternative text `Tx24 logo`", () => {
      const expectedAlternativeText = "Tx24 logo";

      render(
        <ThemeProvider theme={light}>
          <Layout />
        </ThemeProvider>
      );

      const logoImage = screen.getByAltText(expectedAlternativeText);

      expect(logoImage).toBeInTheDocument();
    });
  });
});
