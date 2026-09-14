import { EducationTimeLineItem } from "../components/EducationTimeLine.js";
import { PositionTimeLineItem } from "../components/PositionTimeLine.js";
import { education, positions } from "../data.js";
import { BaseLayout } from "../layouts/BaseLayout.js";
import { div, h1, h2 } from "../lib/html.js";
import type { Page } from "./page.js";

export const cvPage: Page = {
  outputPath: "cv/index.html",
  render: () =>
    BaseLayout(
      { title: "CV", route: "/cv", activeMenuItem: "cv" },
      h1({ class: "page-title" }, "CV"),

      h2({ class: "section-title", id: "title-experience" }, "Experience"),
      div({ class: "timeline" }, positions.map(PositionTimeLineItem)),

      h2({ class: "section-title", id: "title-education" }, "Education"),
      div({ class: "timeline timeline--spaced" }, education.map(EducationTimeLineItem)),
    ),
};
