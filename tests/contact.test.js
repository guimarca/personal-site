import { render, screen } from "@testing-library/react";
import Contact from "../pages/contact";

describe("Contact", () => {
  it("renders", () => {
    render(<Contact />);
    expect(
      screen.getByRole("heading")
    ).toBeInTheDocument();
  });
});
