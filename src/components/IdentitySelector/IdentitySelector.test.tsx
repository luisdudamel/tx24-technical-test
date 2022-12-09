import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import IdentitySelector from "./IdentitySelector";
import { light } from "../../styles/Theme.styled";
import userEvent from "@testing-library/user-event";

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
  describe("When it's invoked and the user clicks on the Passport button", () => {
    test("Then the button with the text `NEXT STEP` should be enabled", async () => {
      const expectedPassportText = "Id Icon Passport";
      const expectedNextButtonText = "NEXT STEP";

      render(
        <ThemeProvider theme={light}>
          <IdentitySelector />
        </ThemeProvider>
      );

      const passportButton = screen.getByRole("button", {
        name: expectedPassportText,
      });
      const nextButton = screen.getByRole("button", {
        name: expectedNextButtonText,
      });
      await userEvent.click(passportButton);

      expect(nextButton).toBeEnabled();
    });
  });
});
