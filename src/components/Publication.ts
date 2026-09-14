import { a, div, i, strong, type VanElement } from "../lib/html.js";
import type { Publication } from "../models.js";

export function PublicationEntry(publication: Publication): VanElement {
  const reference =
    publication.volume && publication.pages
      ? `${publication.volume}, ${publication.pages}.`
      : null;

  return div(
    { class: "entry" },
    `"${publication.title}", with ${publication.authors.join(", ")}. `,
    strong(publication.journal),
    ". ",
    reference,
    ` (${publication.year}). `,
    a(
      { href: publication.link, "aria-label": `Download ${publication.title}` },
      i({ class: "fa-solid fa-file-arrow-down" }),
    ),
  );
}
