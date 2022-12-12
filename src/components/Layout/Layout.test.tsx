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

    test("Then it should render a form and a button with the text `Passport`", () => {
      const expectedButtonText = "Id Icon Passport";
      const mockSetState = jest.fn();

      jest
        .spyOn(React, "useState")
        .mockImplementationOnce(() => [2, mockSetState]);

      render(
        <ThemeProvider theme={light}>
          <Layout />
        </ThemeProvider>
      );

      const passportButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(passportButton).toBeInTheDocument();
    });
    test("Then it should render an image with the alternative text `Identity document front-side icon`", () => {
      const expectedImageAlternativeText = "Identity document front-side icon";
      const mockSetState = jest.fn();

      jest
        .spyOn(React, "useState")
        .mockImplementationOnce(() => [3, mockSetState])
        .mockImplementationOnce(() => [3, mockSetState])
        .mockImplementation(() => ["Passport", mockSetState]);

      render(
        <ThemeProvider theme={light}>
          <Layout />
        </ThemeProvider>
      );

      const identityImage = screen.getByAltText(expectedImageAlternativeText);

      expect(identityImage).toBeInTheDocument();
    });
    test("Then it should render the text `Your address for tokens`", () => {
      const expectedText = "Your address for tokens";
      const mockSetState = jest.fn();

      jest
        .spyOn(React, "useState")
        .mockImplementationOnce(() => [4, mockSetState])
        .mockImplementationOnce(() => [4, mockSetState])
        .mockImplementation(() => ["Passport", mockSetState]);

      render(
        <ThemeProvider theme={light}>
          <Layout />
        </ThemeProvider>
      );

      const addressText = screen.getByText(expectedText);

      expect(addressText).toBeInTheDocument();
    });
  });
});
