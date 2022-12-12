import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { dark } from "../../styles/Theme.styled";
import Wallet from "./Wallet";

describe("Given a Describe function", () => {
  describe("When invoked and the user doesnt check any checkbox and types on a text area", () => {
    test("Then it should render a button with the text `SUBMIT` disabled", () => {
      const expectedButtonText = "SUBMIT";

      render(
        <ThemeProvider theme={dark}>
          <Wallet width={768} />
        </ThemeProvider>
      );

      const submitButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(submitButton).not.toBeEnabled();
    });
  });
  describe("When invoked and the user checks all the checkboxes and types on a text area with 42 characters", () => {
    test("Then it should render a button with the text `SUBMIT` enabled", () => {
      const expectedButtonText = "SUBMIT";
      const expectedWalletText = "101010101010101010101010101010101010101010";

      render(
        <ThemeProvider theme={dark}>
          <Wallet width={768} />
        </ThemeProvider>
      );

      const submitButton = screen.getByRole("button", {
        name: expectedButtonText,
      });
      const textArea = screen.getByRole("textbox");
      userEvent.type(textArea, expectedWalletText);

      const termsCheckbox = screen.getAllByRole("checkbox", {
        hidden: true,
      });

      userEvent.click(termsCheckbox[0]);
      userEvent.click(termsCheckbox[1]);

      expect(submitButton).toBeEnabled();
    });
    describe("And the user clicks the submit button", () => {
      test("Then it should clear the text area content and uncheck both checkboxes", () => {
        const expectedButtonText = "SUBMIT";
        const expectedWalletText = "101010101010101010101010101010101010101010";
        const expectedWalletTextLength = 0;

        render(
          <ThemeProvider theme={dark}>
            <Wallet width={768} />
          </ThemeProvider>
        );

        const submitButton = screen.getByRole("button", {
          name: expectedButtonText,
        });
        const textArea = screen.getByRole("textbox");
        userEvent.type(textArea, expectedWalletText);

        const termsCheckbox = screen.getAllByRole("checkbox", {
          hidden: true,
        });

        userEvent.click(termsCheckbox[0]);
        userEvent.click(termsCheckbox[1]);
        userEvent.click(submitButton);

        expect(textArea.textContent).toHaveLength(expectedWalletTextLength);
        expect(termsCheckbox[0]).not.toBeChecked();
        expect(termsCheckbox[1]).not.toBeChecked();
      });
    });
  });

  describe("When invoked and the user checks all the checkboxes and types on a text area with 42 characters, and uncheck one checkbox", () => {
    test("Then it should render a button with the text `SUBMIT` disabled", () => {
      const expectedButtonText = "SUBMIT";
      const expectedWalletText = "101010101010101010101010101010101010101010";

      render(
        <ThemeProvider theme={dark}>
          <Wallet width={1000} />
        </ThemeProvider>
      );

      const submitButton = screen.getByRole("button", {
        name: expectedButtonText,
      });
      const textArea = screen.getByRole("textbox");
      userEvent.type(textArea, expectedWalletText);

      const termsCheckbox = screen.getAllByRole("checkbox", {
        hidden: true,
      });

      userEvent.click(termsCheckbox[0]);
      userEvent.click(termsCheckbox[1]);
      userEvent.click(termsCheckbox[1]);
      userEvent.click(termsCheckbox[0]);

      expect(submitButton).not.toBeEnabled();
    });
  });
});
