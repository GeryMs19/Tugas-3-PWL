import { render } from "@testing-library/react";
import Tentang from "./Tentang";

describe("Tentang component", () => {
  it("should render without crashing", () => {
    render(<Tentang />);
  });

  it("should render a title", () => {
    const { getByText } = render(<Tentang />);
    expect(getByText("Tentang Saya")).toBeInTheDocument();
  });

  it("should render a description", () => {
    const { getByText } = render(<Tentang />);
    expect(getByText(/Gery/i)).toBeInTheDocument();
  });
});
