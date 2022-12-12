import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { light } from "../../styles/Theme.styled";
import Header from "./Header";

describe("Given a Header function", () => {
  describe("When invoked with a 768 width and a light theme and a setTheme and goHome function", () => {
    test("Then it should render two images with the alternative text `Tx24 logo` and `Sun theme icon light`", () => {
      const expectedAlternativeText = "Tx24 logo";
      const expectedSunIconAlternativeText = "Sun theme icon light";

      render(
        <ThemeProvider theme={light}>
          <Header
            goHome={jest.fn()}
            setTheme={jest.fn()}
            theme="light"
            width={768}
          />
        </ThemeProvider>
      );

      const logoImage = screen.getByAltText(expectedAlternativeText);
      const sunIcon = screen.getByAltText(expectedSunIconAlternativeText);

      expect(logoImage).toBeInTheDocument();
      expect(sunIcon).toBeInTheDocument();
    });

    describe("And the user clicks on the image with the alternative text `Tx24 logo`", () => {
      test("Then it should call the goHome received function", () => {
        const expectedAlternativeText = "Tx24 logo";
        const mockGoHome = jest.fn();

        render(
          <ThemeProvider theme={light}>
            <Header
              goHome={mockGoHome}
              setTheme={jest.fn()}
              theme="light"
              width={768}
            />
          </ThemeProvider>
        );

        const logoImage = screen.getByAltText(expectedAlternativeText);
        userEvent.click(logoImage);

        expect(mockGoHome).toHaveBeenCalled();
      });
    });

    describe("And the user clicks on the image with the alternative text `Sun theme icon light`", () => {
      test("Then it should call the setTheme received function", () => {
        const expectedAlternativeText = "Sun theme icon light";
        const mockSetTheme = jest.fn();

        render(
          <ThemeProvider theme={light}>
            <Header
              goHome={jest.fn()}
              setTheme={mockSetTheme}
              theme="light"
              width={768}
            />
          </ThemeProvider>
        );

        const logoImage = screen.getByAltText(expectedAlternativeText);
        userEvent.click(logoImage);

        expect(mockSetTheme).toHaveBeenCalled();
      });
    });
  });
});
