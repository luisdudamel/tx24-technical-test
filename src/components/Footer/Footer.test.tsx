import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Given a Footer function", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text `Copyright © 2022 FXNET - FZE. All Rights Reserved.`", () => {
      const expectedText = "Copyright © 2022 FXNET - FZE. All Rights Reserved.";

      render(<Footer />);

      const footerText = screen.getByText(expectedText);

      expect(footerText).toBeInTheDocument();
    });
  });
});
