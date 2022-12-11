import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { light } from "../../styles/Theme.styled";
import Form from "./Form";

describe("Given a Form function", () => {
  describe("When invoked", () => {
    test("Then it should render a form with two buttons with the text `NEXT STEP`", () => {
      const expectedText = "NEXT STEP";
      const expectedButtons = 2;

      render(
        <ThemeProvider theme={light}>
          <Form setStep={jest.fn()} />
        </ThemeProvider>
      );

      const formButtonList = screen.getAllByRole("button", {
        name: expectedText,
      });

      expect(formButtonList).toHaveLength(expectedButtons);
    });

    describe("And the user enters valid text on every input field and clicks the button with the text `NEXT STEP`", () => {
      test("Then the button with the text `NEXT STEP` should be enabled", async () => {
        const expectedButtonText = "NEXT STEP";
        const mockSetFunction = jest.fn();

        render(
          <ThemeProvider theme={light}>
            <Form setStep={mockSetFunction} />
          </ThemeProvider>
        );

        const birthInput = screen.getByRole("textbox", {
          name: "Date of Birth Date of Birth",
        });
        userEvent.type(birthInput, "Pedro");

        const nationalityInput = screen.getByRole("textbox", {
          name: "Nationality Nationality",
        });
        userEvent.type(nationalityInput, "Spain");

        const firstAddressInput = screen.getByRole("textbox", {
          name: "Address Line 1 Address Line 1",
        });
        userEvent.type(firstAddressInput, "Calle primera 123");

        const secondAddressInput = screen.getByRole("textbox", {
          name: "Address Line 2 Address Line 2",
        });
        userEvent.type(secondAddressInput, "5-5");

        const countryInput = screen.getByRole("textbox", {
          name: "Country Country",
        });
        userEvent.type(countryInput, "Spain");

        const provinceInput = screen.getByRole("textbox", {
          name: "Province / State Province / State",
        });
        userEvent.type(provinceInput, "Barcelona");

        const nextButtonList = screen.getAllByRole("button", {
          name: expectedButtonText,
        });

        expect(nextButtonList[0]).toBeEnabled();

        await userEvent.click(nextButtonList[0]);

        expect(mockSetFunction).toHaveBeenCalled();
      });
    });
  });
});
