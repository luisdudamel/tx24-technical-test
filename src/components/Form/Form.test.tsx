import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { light } from "../../styles/Theme.styled";
import Form from "./Form";

describe("Given a Form function", () => {
  describe("When invoked", () => {
    test("Then it should render a form with button with the text `NEXT STEP`", () => {
      const expectedText = "NEXT STEP";
      render(
        <ThemeProvider theme={light}>
          <Form />
        </ThemeProvider>
      );

      const formButton = screen.getByRole("button", { name: expectedText });

      expect(formButton).toBeInTheDocument();
    });
  });
});
