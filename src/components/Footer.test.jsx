import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  it("renders without crashing", () => {
    render(<Footer />);

    const footer = document.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });
});
