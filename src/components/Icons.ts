import { circle, path, svg, type VanElement } from "../lib/html.js";

/** Hamburger glyph used by the mobile top bar. */
export function MenuIcon(): VanElement {
  return svg(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      class: "icon",
      "aria-hidden": "true",
    },
    path({
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 6h16M4 12h16M4 18h16",
    }),
  );
}

export function LinkedInIcon(): VanElement {
  return svg(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
    },
    circle({ cx: "4.983", cy: "5.009", r: "2.188" }),
    path({
      d: "M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z",
    }),
  );
}
