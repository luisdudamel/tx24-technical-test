import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { dark } from "../../styles/Theme.styled";
import DocumentUpload from "./DocumentUpload";

describe("Given a DocumentUpload function", () => {
  describe("When it's invoked with the document `Passport` and the user uploads a File", () => {
    test("Then the button with the text `NEXT STEP` should be enabled", () => {
      const expectedButtonText = "NEXT STEP";
      const expectedDocumentText = "Passport";
      const expectedFrontLabelText = "Document Front";

      render(
        <ThemeProvider theme={dark}>
          <DocumentUpload
            width={1000}
            setStep={jest.fn()}
            document={expectedDocumentText}
          />
        </ThemeProvider>
      );
      const input = screen.getByLabelText(expectedFrontLabelText);

      const file = new File([new ArrayBuffer(1)], "photo.jpg");

      userEvent.upload(input, file);

      const nextButton = screen.getByRole("button", {
        name: expectedButtonText,
      });
      expect(nextButton).toBeEnabled();
    });
    describe("And the user clicks the button with the text `X`", () => {
      test("Then the button with the text `NEXT STEP` should be disabled", () => {
        const expectedButtonText = "NEXT STEP";
        const expectedDocumentText = "Passport";
        const expectedFrontLabelText = "Document Front";

        render(
          <ThemeProvider theme={dark}>
            <DocumentUpload
              width={768}
              setStep={jest.fn()}
              document={expectedDocumentText}
            />
          </ThemeProvider>
        );
        const input = screen.getByLabelText(expectedFrontLabelText);

        const file = new File([new ArrayBuffer(1)], "photo.jpg");

        userEvent.upload(input, file);

        const deleteButton = screen.getByRole("button", { name: "X" });

        userEvent.click(deleteButton);

        const nextButton = screen.getByRole("button", {
          name: expectedButtonText,
        });
        expect(nextButton).not.toBeEnabled();
      });
    });
  });

  describe("When it's invoked with the document `Driver's License` and the user uploads a File", () => {
    test("Then the button with the text `NEXT STEP` should be enabled", () => {
      const expectedButtonText = "NEXT STEP";
      const expectedDocumentText = "Driver's License";
      const expectedFrontLabelText = "Document Front";

      render(
        <ThemeProvider theme={dark}>
          <DocumentUpload
            width={768}
            setStep={jest.fn()}
            document={expectedDocumentText}
          />
        </ThemeProvider>
      );
      const input = screen.getByLabelText(expectedFrontLabelText);

      const file = new File([new ArrayBuffer(1)], "photo.jpg");

      userEvent.upload(input, file);

      const nextButton = screen.getByRole("button", {
        name: expectedButtonText,
      });
      expect(nextButton).toBeEnabled();
    });
    describe("And the user clicks the button with the text `X`", () => {
      test("Then the button with the text `NEXT STEP` should be disabled", () => {
        const expectedButtonText = "NEXT STEP";
        const expectedDocumentText = "Driver's License";
        const expectedFrontLabelText = "Document Front";

        render(
          <ThemeProvider theme={dark}>
            <DocumentUpload
              width={768}
              setStep={jest.fn()}
              document={expectedDocumentText}
            />
          </ThemeProvider>
        );
        const input = screen.getByLabelText(expectedFrontLabelText);

        const file = new File([new ArrayBuffer(1)], "photo.jpg");

        userEvent.upload(input, file);

        const deleteButton = screen.getByRole("button", { name: "X" });

        userEvent.click(deleteButton);

        const nextButton = screen.getByRole("button", {
          name: expectedButtonText,
        });
        expect(nextButton).not.toBeEnabled();
      });
    });
  });

  describe("When it's invoked with the document `National Card` and the user uploads two Files", () => {
    test("Then the button with the text `NEXT STEP` should be enabled", () => {
      const expectedButtonText = "NEXT STEP";
      const expectedDocumentText = "National Card";
      const expectedFrontLabelText = "Document Front";
      const expectedBackLabelText = "Document Back";

      render(
        <ThemeProvider theme={dark}>
          <DocumentUpload
            width={768}
            setStep={jest.fn()}
            document={expectedDocumentText}
          />
        </ThemeProvider>
      );
      const frontInput = screen.getByLabelText(expectedFrontLabelText);
      const backInput = screen.getByLabelText(expectedBackLabelText);

      const file = new File([new ArrayBuffer(1)], "photo.jpg");

      userEvent.upload(frontInput, file);
      userEvent.upload(backInput, file);

      const nextButton = screen.getByRole("button", {
        name: expectedButtonText,
      });
      expect(nextButton).toBeEnabled();
    });
    describe("And the user clicks the button with the text `X`", () => {
      test("Then the button with the text `NEXT STEP` should be disabled", () => {
        const expectedButtonText = "NEXT STEP";
        const expectedDocumentText = "National Card";
        const expectedFrontLabelText = "Document Front";
        const expectedBackLabelText = "Document Back";

        render(
          <ThemeProvider theme={dark}>
            <DocumentUpload
              width={1000}
              setStep={jest.fn()}
              document={expectedDocumentText}
            />
          </ThemeProvider>
        );
        const frontInput = screen.getByLabelText(expectedFrontLabelText);
        const backInput = screen.getByLabelText(expectedBackLabelText);

        const file = new File([new ArrayBuffer(1)], "photo.jpg");

        userEvent.upload(frontInput, file);
        userEvent.upload(backInput, file);

        const deleteButton = screen.getAllByRole("button", { name: "X" });

        userEvent.click(deleteButton[0]);
        userEvent.click(deleteButton[1]);

        const nextButton = screen.getByRole("button", {
          name: expectedButtonText,
        });
        expect(nextButton).not.toBeEnabled();
      });
    });
  });
});
