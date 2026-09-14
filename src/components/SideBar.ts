import { a, aside, div, img, label, type VanElement } from "../lib/html.js";
import { SIDEBAR_TOGGLE_ID } from "./TopBar.js";
import { SideBarFooter } from "./SideBarFooter.js";
import { SideBarMenu, type MenuItemId } from "./SideBarMenu.js";

export function SideBar(activeItemId?: MenuItemId): VanElement {
  return div(
    { class: "sidebar" },
    label({ for: SIDEBAR_TOGGLE_ID, class: "sidebar__overlay", "aria-hidden": "true" }),
    aside(
      { class: "sidebar__panel" },
      div(
        { class: "sidebar__avatar" },
        a({ href: "/" }, img({ src: "/img/guillem-500.jpg", alt: "Profile image" })),
      ),
      SideBarMenu(activeItemId),
      SideBarFooter(),
    ),
  );
}
