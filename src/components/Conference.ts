import { div, h4, type VanElement } from "../lib/html.js";
import type { Conference } from "../models.js";

export function ConferenceEntry(conference: Conference): VanElement {
  return div(
    { class: "entry" },
    h4({ class: "entry__title" }, conference.title),
    div(`${conference.month}, ${conference.year}, ${conference.location}`),
    div({ class: "entry__role" }, `Presentation: ${conference.role}`),
  );
}
