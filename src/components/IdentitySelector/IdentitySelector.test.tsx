import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import IdentitySelector from "./IdentitySelector";
import { light } from "../../styles/Theme.styled";
import userEvent from "@testing-library/user-event";

describe("Given a IdentitySelector function", () => {
  describe("When it's invoked", () => {
    test("Then it should render three buttons with the national ID's text", () => {
      const expectedPassportText = "Passport Icon Passport";
      const expectedNationalCardText = "Id Icon National Card";
      const expectedDriversLicenseText = "License Icon Driver's License";

      render(
        <ThemeProvider theme={light}>
          <IdentitySelector
            theme="dark"
            width={768}
            setDocument={jest.fn()}
            setStep={jest.fn()}
          />
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
      const expectedPassportText = "Passport Icon Passport";
      const expectedNextButtonText = "NEXT STEP";

      render(
        <ThemeProvider theme={light}>
          <IdentitySelector
            theme="dark"
            width={768}
            setDocument={jest.fn()}
            setStep={jest.fn()}
          />
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

    describe("And the user clicks on th same button with the text `Passport Icon Passport`", () => {
      test("Then the button with the text `NEXT STEP` should be disabled", async () => {
        const expectedPassportText = "Passport Icon Passport";
        const expectedNextButtonText = "NEXT STEP";

        render(
          <ThemeProvider theme={light}>
            <IdentitySelector
              theme="dark"
              width={768}
              setDocument={jest.fn()}
              setStep={jest.fn()}
            />
          </ThemeProvider>
        );

        const passportButton = screen.getByRole("button", {
          name: expectedPassportText,
        });

        const nextButton = screen.getByRole("button", {
          name: expectedNextButtonText,
        });
        await userEvent.click(passportButton);
        await userEvent.click(passportButton);

        expect(nextButton).toBeDisabled();
      });
    });
  });

  describe("When it's invoked and the user clicks on the National Card button", () => {
    test("Then the button with the text `NEXT STEP` should be enabled", async () => {
      const expectedNationalCardText = "Id Icon National Card";
      const expectedNextButtonText = "NEXT STEP";

      render(
        <ThemeProvider theme={light}>
          <IdentitySelector
            theme="dark"
            width={768}
            setDocument={jest.fn()}
            setStep={jest.fn()}
          />
        </ThemeProvider>
      );

      const nationalCardButton = screen.getByRole("button", {
        name: expectedNationalCardText,
      });
      const nextButton = screen.getByRole("button", {
        name: expectedNextButtonText,
      });
      await userEvent.click(nationalCardButton);

      expect(nextButton).toBeEnabled();
    });

    describe("And the user clicks on th same button with the text `National Card Button`", () => {
      test("Then the button with the text `NEXT STEP` should be disabled", async () => {
        const expectedNationalCardText = "Id Icon National Card";
        const expectedNextButtonText = "NEXT STEP";

        render(
          <ThemeProvider theme={light}>
            <IdentitySelector
              theme="dark"
              width={768}
              setDocument={jest.fn()}
              setStep={jest.fn()}
            />
          </ThemeProvider>
        );

        const nationalCardButton = screen.getByRole("button", {
          name: expectedNationalCardText,
        });

        const nextButton = screen.getByRole("button", {
          name: expectedNextButtonText,
        });
        await userEvent.click(nationalCardButton);
        await userEvent.click(nationalCardButton);

        expect(nextButton).toBeDisabled();
      });
    });
  });

  describe("When it's invoked and the user clicks on the Driver`s license button", () => {
    test("Then the button with the text `NEXT STEP` should be enabled", async () => {
      const expectedDriversLicenseText = "License Icon Driver's License";
      const expectedNextButtonText = "NEXT STEP";

      render(
        <ThemeProvider theme={light}>
          <IdentitySelector
            theme="dark"
            width={768}
            setDocument={jest.fn()}
            setStep={jest.fn()}
          />
        </ThemeProvider>
      );

      const driversLicenseButton = screen.getByRole("button", {
        name: expectedDriversLicenseText,
      });
      const nextButton = screen.getByRole("button", {
        name: expectedNextButtonText,
      });
      await userEvent.click(driversLicenseButton);

      expect(nextButton).toBeEnabled();
    });

    describe("And the user clicks on th same button with the text `National Card Button`", () => {
      test("Then the button with the text `NEXT STEP` should be disabled", async () => {
        const expectedDriversLicenseText = "License Icon Driver's License";
        const expectedNextButtonText = "NEXT STEP";

        render(
          <ThemeProvider theme={light}>
            <IdentitySelector
              theme="dark"
              width={768}
              setDocument={jest.fn()}
              setStep={jest.fn()}
            />
          </ThemeProvider>
        );

        const driversLicenseButton = screen.getByRole("button", {
          name: expectedDriversLicenseText,
        });

        const nextButton = screen.getByRole("button", {
          name: expectedNextButtonText,
        });
        await userEvent.click(driversLicenseButton);
        await userEvent.click(driversLicenseButton);

        expect(nextButton).toBeDisabled();
      });
    });
  });
});
