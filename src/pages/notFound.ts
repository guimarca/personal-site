import { BaseLayout } from "../layouts/BaseLayout.js";
import { a, div, h1, p } from "../lib/html.js";
import type { Page } from "./page.js";

export const notFoundPage: Page = {
  outputPath: "404.html",
  render: () =>
    BaseLayout(
      { title: "404: Not Found", route: "/404", includeSidebar: false },
      div(
        { class: "not-found" },
        div({ class: "not-found__emoji" }, "🏝"),
        h1({ class: "not-found__code" }, "404"),
        p({ class: "not-found__message" }, "The page you're looking for couldn't be found."),
        a({ class: "button button--accent", href: "/" }, "Home"),
      ),
    ),
};
