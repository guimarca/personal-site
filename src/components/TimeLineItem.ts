import { div, span, type ChildDom, type VanElement } from "../lib/html.js";

/**
 * One row of a vertical timeline: the dot and its connecting line on the left,
 * the caller's content on the right. The line of the last item in a
 * `.timeline` container is hidden by CSS.
 */
export function TimeLineItem(...content: ChildDom[]): VanElement {
  return div(
    { class: "timeline__item" },
    div(
      { class: "timeline__marker" },
      span({ class: "timeline__dot" }),
      span({ class: "timeline__line" }),
    ),
    div({ class: "timeline__body" }, content),
  );
}
