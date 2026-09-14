import { contact } from "../data.js";
import { a, div, type VanElement } from "../lib/html.js";
import { LinkedInIcon } from "./Icons.js";

/** Social links pinned to the bottom of the sidebar, over a fading gradient. */
export function SideBarFooter(): VanElement[] {
  const { linkedin } = contact.profiles;

  return [
    div({ class: "sidebar__fade", "aria-hidden": "true" }),
    div(
      { class: "sidebar__social" },
      linkedin
        ? a(
            {
              href: linkedin.link,
              target: "_blank",
              rel: "noopener",
              "aria-label": linkedin.name,
              title: linkedin.name,
            },
            LinkedInIcon(),
          )
        : null,
    ),
  ];
}
