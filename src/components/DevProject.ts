import { a, div, h3, i, p, span, type VanElement } from "../lib/html.js";
import { getIconClasses } from "../lib/icons.js";
import type { DevProject, WithLinkItem } from "../models.js";

function ResourceTag(resource: WithLinkItem): VanElement {
  const iconClasses = getIconClasses(resource.name);
  return span(
    { class: "tag tag--resource" },
    a({ href: resource.link, target: "_blank", rel: "noopener" },
      iconClasses ? i({ class: iconClasses }) : null,
      resource.name,
    ),
  );
}

export function DevProjectCard(project: DevProject): VanElement {
  return div(
    { class: "card" },
    div(
      { class: "card__body" },
      h3({ class: "card__title" }, project.title),
      p({ class: "card__description" }, project.description),
      div(
        { class: "tag-list tag-list--end" },
        (project.resources ?? []).map(ResourceTag),
      ),
    ),
  );
}
