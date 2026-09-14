import { BaseHead } from "../components/BaseHead.js";
import { SideBar } from "../components/SideBar.js";
import type { MenuItemId } from "../components/SideBarMenu.js";
import { SiteFooter } from "../components/SiteFooter.js";
import { SIDEBAR_TOGGLE_ID, TopBar } from "../components/TopBar.js";
import { SITE_DESCRIPTION, SITE_TITLE } from "../config.js";
import { body, div, document, head, input, main, type ChildDom } from "../lib/html.js";

export interface PageMeta {
  /** Page name, shown after the site name in the document title. */
  title: string;
  description?: string;
  /** Canonical path of the page, e.g. `/cv`. */
  route: string;
  image?: string;
  ogType?: string;
  includeSidebar?: boolean;
  activeMenuItem?: MenuItemId;
}

/** Wraps a page's content in the shared chrome and returns the HTML document. */
export function BaseLayout(meta: PageMeta, ...content: ChildDom[]): string {
  const { includeSidebar = true } = meta;

  return document(
    { lang: "en" },
    head(
      BaseHead({
        title: `${SITE_TITLE} - ${meta.title}`,
        description: meta.description ?? SITE_DESCRIPTION,
        route: meta.route,
        image: meta.image,
        ogType: meta.ogType,
      }),
    ),
    body(
      div(
        { class: "layout" },
        includeSidebar
          ? input({ id: SIDEBAR_TOGGLE_ID, type: "checkbox", class: "sidebar-toggle" })
          : null,
        div(
          { class: "layout__content" },
          includeSidebar ? TopBar("Guillem") : null,
          div({ class: "page" }, main({ class: "page__main" }, content)),
          SiteFooter(),
        ),
        includeSidebar ? SideBar(meta.activeMenuItem) : null,
      ),
    ),
  );
}
