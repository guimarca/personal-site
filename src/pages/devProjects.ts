import { DevProjectCard } from "../components/DevProject.js";
import { devCompanies } from "../data.js";
import { BaseLayout } from "../layouts/BaseLayout.js";
import { div, h1, h2, p } from "../lib/html.js";
import type { Page } from "./page.js";

export const devProjectsPage: Page = {
  outputPath: "dev-projects/index.html",
  render: () =>
    BaseLayout(
      { title: "Dev Projects", route: "/dev-projects", activeMenuItem: "dev-projects" },
      h1({ class: "page-title" }, "Dev Projects"),
      p({ class: "page-intro" }, "These are some of the projects I have worked on."),

      devCompanies.map((company) =>
        div(
          { class: "company" },
          h2({ class: "section-title" }, company.title),
          company.projects.map((project) => [
            DevProjectCard(project),
            div({ class: "divider" }),
          ]),
        ),
      ),
    ),
};
