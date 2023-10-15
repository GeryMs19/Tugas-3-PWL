import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import App from "./App";

describe("App component", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<App />);
    expect(getByText("Beranda")).toBeInTheDocument();
  });
});
