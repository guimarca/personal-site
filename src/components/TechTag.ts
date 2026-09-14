import { i, span, type VanElement } from "../lib/html.js";
import { getIconClasses } from "../lib/icons.js";

/** Technology chip, prefixed with the matching icon when there is one. */
export function TechTag(name: string): VanElement {
  const iconClasses = getIconClasses(name);
  return span({ class: "tag tag--tech" }, iconClasses ? i({ class: iconClasses }) : null, name);
}
