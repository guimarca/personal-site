import { render, screen } from "@testing-library/react";
import Positions from "../pages/positions";

describe("Positions", () => {
  it("renders", () => {
    render(<Positions />);
    expect(
      screen.getByRole("heading", { name: "positions" })
    ).toBeInTheDocument();
  });
});
