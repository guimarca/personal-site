import { a, i, li, nav, ul, type VanElement } from "../lib/html.js";

export const MENU_ITEMS = [
  { id: "home", label: "Home", href: "/", icon: "fa-solid fa-house" },
  { id: "cv", label: "CV", href: "/cv", icon: "fa-regular fa-file-lines" },
  {
    id: "dev-projects",
    label: "Dev Projects",
    href: "/dev-projects",
    icon: "fa-solid fa-laptop-code",
  },
  {
    id: "academic-work",
    label: "Academic work",
    href: "/academic-work",
    icon: "fa-solid fa-user-graduate",
  },
  { id: "contact", label: "Contact", href: "/contact", icon: "fa-regular fa-address-card" },
] as const;

export type MenuItemId = (typeof MENU_ITEMS)[number]["id"];

export function SideBarMenu(activeItemId?: MenuItemId): VanElement {
  return nav(
    { class: "sidebar__nav", "aria-label": "Main" },
    ul(
      { class: "menu" },
      MENU_ITEMS.map((item) => {
        const isActive = item.id === activeItemId;
        return li(
          a(
            {
              id: item.id,
              href: item.href,
              ...(isActive ? { class: "is-active", "aria-current": "page" } : {}),
            },
            i({ class: item.icon, "aria-hidden": "true" }),
            item.label,
          ),
        );
      }),
    ),
  );
}
