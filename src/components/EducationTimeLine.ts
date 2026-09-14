import { a, h3, span, type VanElement } from "../lib/html.js";
import type { EducationItem } from "../models.js";
import { TimeLineItem } from "./TimeLineItem.js";

export function EducationTimeLineItem(item: EducationItem): VanElement {
  return TimeLineItem(
    h3({ class: "timeline__title" }, a({ href: item.titulation.link }, item.titulation.name)),
    span(
      { class: "timeline__subtitle" },
      `${item.year}, `,
      a({ href: item.institution.link }, item.institution.name),
    ),
  );
}
