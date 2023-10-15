import { render } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  it("renders the name, email, and message", () => {
    const name = "John Doe";
    const email = "johndoe@example.com";
    const message = "Hello, world!";
    const { getByText } = render(
      <Card name={name} email={email} message={message} />
    );
    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(email)).toBeInTheDocument();
    expect(getByText(message)).toBeInTheDocument();
  });
});
