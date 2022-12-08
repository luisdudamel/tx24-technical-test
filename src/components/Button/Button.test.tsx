import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { dark } from "../../styles/Theme.styled";
import Button from "./Button";

describe("Given a Button function", () => {
  describe("When invoked with the text `Next Step` and a function", () => {
    test("Then it should render a button with the text `Next Step`", () => {
      const buttonText = "Next Step";
      const expectedButtonText = "Next Step";
      const expectedButtonClass = "formButton";

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
});
