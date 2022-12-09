import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import IdentitySelector from "./IdentitySelector";
import { light } from "../../styles/Theme.styled";

describe("Given a IdentitySelector function", () => {
  describe("When it's invoked", () => {
    test("Then it should render three buttons with the national ID's text", () => {
      const expectedPassportText = "Id Icon Passport";
      const expectedNationalCardText = "Id Icon National Card";
      const expectedDriversLicenseText = "Id Icon Driver's License";

      render(
        <ThemeProvider theme={light}>
          <IdentitySelector />
        </ThemeProvider>
      );

      const passportButton = screen.getByRole("button", {
        name: expectedPassportText,
      });
      const nationalCardButton = screen.getByRole("button", {
        name: expectedNationalCardText,
      });
      const driversLicense = screen.getByRole("button", {
        name: expectedDriversLicenseText,
      });

      expect(passportButton).toBeInTheDocument();
      expect(nationalCardButton).toBeInTheDocument();
      expect(driversLicense).toBeInTheDocument();
    });
  });
});
