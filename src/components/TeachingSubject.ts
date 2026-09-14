import { a, div, span, strong, type VanElement } from "../lib/html.js";
import type { TeachingSubject } from "../models.js";

export function TeachingSubjectEntry(subject: TeachingSubject): VanElement {
  const externalLink = (name: string, link: string) =>
    a({ href: link, target: "_blank", rel: "noopener" }, name);

  return div(
    { class: "entry" },
    span({ class: "entry__period" }, strong(`${subject.period.from} - ${subject.period.to}`)),
    externalLink(subject.course.name, subject.course.link),
    ", ",
    externalLink(subject.degree.name, subject.degree.link),
    ", ",
    externalLink(subject.university.name, subject.university.link),
  );
}
