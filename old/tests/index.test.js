import { render, screen } from "@testing-library/react";
import App from "../pages/index";

describe("App", () => {
  it("renders", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Guillem Martínez-Cànovas" })
    ).toBeInTheDocument();
  });
});
