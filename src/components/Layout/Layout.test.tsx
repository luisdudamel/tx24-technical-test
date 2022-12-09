import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { light } from "../../styles/Theme.styled";
import Layout from "./Layout";
import React from "react";

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

    test("Then it should render a form and a button with the text `NEXT STEP`", () => {
      const expectedButtonText = "NEXT STEP";
      const mockSetState = jest.fn();

      jest
        .spyOn(React, "useState")
        .mockImplementationOnce(() => [2, mockSetState]);

      render(
        <ThemeProvider theme={light}>
          <Layout />
        </ThemeProvider>
      );

      const nextButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(nextButton).toBeInTheDocument();
    });
  });
});
