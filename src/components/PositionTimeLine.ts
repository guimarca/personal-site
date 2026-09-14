import { a, div, h3, img, span, type VanElement } from "../lib/html.js";
import type { Position } from "../models.js";
import { TechTag } from "./TechTag.js";
import { TimeLineItem } from "./TimeLineItem.js";

export function PositionTimeLineItem(position: Position): VanElement {
  return TimeLineItem(
    div(
      { class: "position" },
      div(
        { class: "position__header" },
        a(
          { class: "position__logo", href: position.site.link, target: "_blank", rel: "noopener" },
          img({ src: `/${position.site.img}`, alt: position.site.name, loading: "lazy" }),
        ),
        div(
          h3(
            { class: "timeline__title" },
            position.title,
            span({ class: "position__preposition" }, " at "),
            a({ href: position.site.link }, position.site.name),
          ),
          div({ class: "timeline__subtitle" }, `${position.date.from} - ${position.date.to}`),
        ),
      ),
      div({ class: "position__description" }, position.description),
      div({ class: "tag-list" }, position.techStack.map(TechTag)),
    ),
  );
}
