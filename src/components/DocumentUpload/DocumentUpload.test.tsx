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

      render(
        <ThemeProvider theme={dark}>
          <DocumentUpload document={expectedDocumentText} />
        </ThemeProvider>
      );
      const input = screen.getByLabelText("frontdocument");

      const file = new File([new ArrayBuffer(1)], "photo.jpg");

      userEvent.upload(input, file);

      const nextButton = screen.getByRole("button", {
        name: expectedButtonText,
      });
      expect(nextButton).toBeEnabled();
    });
  });
});
