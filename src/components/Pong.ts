import { div, type VanElement } from "../lib/html.js";

/** Purely decorative CSS-animated pong rally. */
export function Pong(): VanElement {
  return div(
    { class: "pong", "aria-hidden": "true" },
    div({ class: "pong__net" }),
    div({ class: "pong__paddle pong__paddle--left" }),
    div({ class: "pong__paddle pong__paddle--right" }),
    div({ class: "pong__ball" }),
  );
}
