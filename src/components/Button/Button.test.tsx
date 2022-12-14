import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { ThemeProvider } from "styled-components";
import { dark } from "../../styles/Theme.styled";
import DocumentUpload from "../DocumentUpload/DocumentUpload";
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

  describe("When invoked with the text `Next Step` and no function and the user clicks on the button", () => {
    test("Then it should render a button with the text `Next Step` and don`t call the received function", async () => {
      const buttonText = "Next Step";
      const expectedButtonText = "Next Step";
      const expectedButtonClass = "identity";
      const mockFunction = jest.fn();

      render(
        <ThemeProvider theme={dark}>
          <Button
            isDisabled={false}
            buttonType="submit"
            buttonClass={expectedButtonClass}
            buttonText={buttonText}
            setActive={undefined}
          />
        </ThemeProvider>
      );

      const formButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(formButton);

      expect(mockFunction).not.toHaveBeenCalled();
    });
  });

  describe("When invoked with the text `SELECT` and a function and the user clicks on the button", () => {
    test("Then it should call the received function", async () => {
      const buttonText = "SELECT";

      const mockFunction = jest.fn();

      const spy = jest
        .spyOn(React, "useRef")
        .mockReturnValueOnce({ current: { click: mockFunction } });

      render(
        <ThemeProvider theme={dark}>
          <DocumentUpload width={768} setStep={jest.fn()} document="Passport" />
        </ThemeProvider>
      );

      const selectButton = screen.getByRole("button", { name: buttonText });

      await userEvent.click(selectButton);

      expect(spy).toHaveBeenCalled();
    });
  });
});
