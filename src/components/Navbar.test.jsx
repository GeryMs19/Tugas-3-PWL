import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("renders Navbar component", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const berandaElement = screen.getByText(/Beranda/i);
    expect(berandaElement).toBeInTheDocument();

    const tentangElement = screen.getByText(/Tentang/i);
    expect(tentangElement).toBeInTheDocument();

    const kontakElement = screen.getByText(/Kontak/i);
    expect(kontakElement).toBeInTheDocument();
  });
});
