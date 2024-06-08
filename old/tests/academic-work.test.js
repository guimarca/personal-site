import { render, screen } from "@testing-library/react";
import AcademicWork from "../pages/academic-work";

describe("AcademicWork", () => {
  it("renders", () => {
    render(<AcademicWork />);
    expect(
      screen.getByRole("heading", { name: "academic work" })
    ).toBeInTheDocument();
  });
});
