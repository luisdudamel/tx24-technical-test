import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { dark } from "../../styles/Theme.styled";
import Footer from "./Footer";

describe("Given a Footer function", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text `Copyright © 2022 FXNET - FZE. All Rights Reserved.` two times", () => {
      const expectedText = "Copyright © 2022 FXNET - FZE. All Rights Reserved.";
      const expectedFooterElements = 2;

      render(
        <ThemeProvider theme={dark}>
          <Footer />
        </ThemeProvider>
      );

      const footerTextList = screen.getAllByText(expectedText);

      expect(footerTextList).toHaveLength(expectedFooterElements);
    });
  });
});
