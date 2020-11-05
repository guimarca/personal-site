import { render, screen } from "@testing-library/react";
import DevProjects from "../pages/dev-projects";

describe("DevProjects", () => {
  it("renders", () => {
    render(<DevProjects />);
    expect(
      screen.getByRole("heading", { name: "dev-projects" })
    ).toBeInTheDocument();
  });
});
