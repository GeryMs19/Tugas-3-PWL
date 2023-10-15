import { render } from "@testing-library/react";
import Beranda from "./Beranda";

describe("Beranda component", () => {
  it("renders without crashing", () => {
    render(<Beranda />);

    const beranda = document.querySelector("h1");
    expect(beranda).toBeInTheDocument();
  });
});
