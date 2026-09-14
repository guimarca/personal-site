import { Pong } from "../components/Pong.js";
import { description } from "../data.js";
import { BaseLayout } from "../layouts/BaseLayout.js";
import { a, div, p, span } from "../lib/html.js";
import type { Page } from "./page.js";

export const homePage: Page = {
  outputPath: "index.html",
  render: () =>
    BaseLayout(
      { title: "Home", route: "/", activeMenuItem: "home" },
      div(
        { class: "home" },
        p({ class: "home__greeting" }, "Hey there ", span({ class: "home__wave" }, "👋")),
        div({ class: "home__name" }, "Guillem Martínez-Cànovas"),
        div({ class: "home__job-title" }, description.jobTitle),
        div(
          { class: "home__intro" },
          description.text.map((line) => p(line)),
        ),
        div({ class: "home__cta" }, a({ class: "button", href: "/contact" }, "Contact me!")),
        div({ class: "home__pong" }, Pong()),
      ),
    ),
};
