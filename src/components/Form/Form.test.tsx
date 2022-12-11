import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { light } from "../../styles/Theme.styled";
import Form from "./Form";

describe("Given a Form function", () => {
  describe("When invoked", () => {
    test("Then it should render a form with a button with the text `NEXT STEP`", () => {
      const expectedText = "NEXT STEP";

      render(
        <ThemeProvider theme={light}>
          <Form width={768} setStep={jest.fn()} />
        </ThemeProvider>
      );

      const formButton = screen.getByRole("button", {
        name: expectedText,
      });

      expect(formButton).toBeInTheDocument();
    });

    describe("And the user enters valid text on every input field and clicks the button with the text `NEXT STEP`", () => {
      test("Then the button with the text `NEXT STEP` should be enabled", async () => {
        const expectedButtonText = "NEXT STEP";
        const mockSetFunction = jest.fn();

        render(
          <ThemeProvider theme={light}>
            <Form width={768} setStep={mockSetFunction} />
          </ThemeProvider>
        );

        const birthInput = screen.getByRole("textbox", {
          name: "Date of Birth",
        });
        userEvent.type(birthInput, "Pedro");

        const nationalityInput = screen.getByRole("textbox", {
          name: "Nationality",
        });
        userEvent.type(nationalityInput, "Spain");

        const firstAddressInput = screen.getByRole("textbox", {
          name: "Address Line 1",
        });
        userEvent.type(firstAddressInput, "Calle primera 123");

        const secondAddressInput = screen.getByRole("textbox", {
          name: "Address Line 2",
        });
        userEvent.type(secondAddressInput, "5-5");

        const countryInput = screen.getByRole("textbox", {
          name: "Country",
        });
        userEvent.type(countryInput, "Spain");

        const provinceInput = screen.getByRole("textbox", {
          name: "Province / State",
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
