import { a, div, header, label, type VanElement } from "../lib/html.js";
import { MenuIcon } from "./Icons.js";

/** Id of the checkbox that drives the off-canvas sidebar on small screens. */
export const SIDEBAR_TOGGLE_ID = "sidebar-toggle";

/** Bar shown only on screens too narrow for a permanent sidebar. */
export function TopBar(siteTitle: string): VanElement {
  return header(
    { class: "topbar" },
    div(
      { class: "topbar__inner" },
      div(
        { class: "topbar__start" },
        label(
          {
            for: SIDEBAR_TOGGLE_ID,
            class: "button button--ghost button--square",
            role: "button",
            tabindex: "0",
            "aria-label": "Open the menu",
          },
          MenuIcon(),
        ),
      ),
      div(
        { class: "topbar__center" },
        a({ class: "button button--ghost topbar__title", href: "/" }, siteTitle),
      ),
      div({ class: "topbar__end" }),
    ),
  );
}
