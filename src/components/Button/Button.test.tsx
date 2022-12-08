import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { dark } from "../../styles/Theme.styled";
import Button from "./Button";

describe("Given a Button function", () => {
  describe("When invoked with the text `Next Step` and a function", () => {
    test("Then it should render a button with the text `Next Step`", () => {
      const buttonText = "Next Step";
      const expectedButtonText = "Next Step";
      const expectedButtonClass = "button__class";

      render(
        <ThemeProvider theme={dark}>
          <Button
            isDisabled={false}
            buttonType="submit"
            buttonClass={expectedButtonClass}
            buttonText={buttonText}
          />
        </ThemeProvider>
      );

      const formButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(formButton).toBeInTheDocument();
    });
  });

  describe("And the user clicks on the button", () => {
    test("Then it should call the received function`", async () => {
      const buttonText = "Next Step";
      const expectedButtonText = "Next Step";
      const expectedButtonClass = "button__class";
      const expectedButtonFunction = jest.fn();

      render(
        <ThemeProvider theme={dark}>
          <Button
            isDisabled={false}
            buttonType="submit"
            buttonClass={expectedButtonClass}
            buttonText={buttonText}
          />
        </ThemeProvider>
      );

      const formButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(formButton);

      expect(expectedButtonFunction).toHaveBeenCalled();
    });
  });
});
