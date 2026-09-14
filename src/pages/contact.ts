import { contact } from "../data.js";
import { BaseLayout } from "../layouts/BaseLayout.js";
import { a, div, h1, i, p, raw, span } from "../lib/html.js";
import type { Page } from "./page.js";

export const contactPage: Page = {
  outputPath: "contact/index.html",
  render: () => {
    const { linkedin } = contact.profiles;

    return BaseLayout(
      { title: "Contact", route: "/contact", activeMenuItem: "contact" },
      h1({ class: "page-title" }, "Contact"),
      p(
        { class: "page-intro page-intro--lead" },
        "You can contact me via email or any of the links you'll find below. " +
          "I'll try to get back to you ASAP!",
      ),

      div(
        { class: "contact__email" },
        i({ class: "fa fa-envelope", "aria-hidden": "true" }),
        " ",
        span({ class: "contact__email-address" }, raw(contact.email)),
      ),

      div(
        { class: "contact__profiles" },
        linkedin
          ? a(
              {
                href: linkedin.link,
                target: "_blank",
                rel: "noopener",
                "aria-label": linkedin.name,
                title: linkedin.name,
              },
              i({ class: "fa-brands fa-linkedin" }),
            )
          : null,
      ),
    );
  },
};
