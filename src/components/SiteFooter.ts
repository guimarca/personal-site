import { div, footer, script, type VanElement } from "../lib/html.js";

/**
 * The year is baked in at build time and refreshed on load, so a page that
 * sits in a browser cache across new year's eve still shows the right one.
 */
export function SiteFooter(): VanElement {
  return footer(
    { class: "site-footer" },
    div({ class: "site-footer__text", id: "footer-text" }, `© ${new Date().getFullYear()} Guillem`),
    script(
      'document.getElementById("footer-text").textContent = ' +
        '"\\u00A9 " + new Date().getFullYear() + " Guillem";',
    ),
  );
}
