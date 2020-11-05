import { render, screen } from "@testing-library/react";
import Education from "../pages/education";

describe("Education", () => {
  it("renders", () => {
    render(<Education />);
    expect(
      screen.getByRole("heading", { name: "education" })
    ).toBeInTheDocument();
  });
});
