import { ConferenceEntry } from "../components/Conference.js";
import { PublicationEntry } from "../components/Publication.js";
import { TeachingSubjectEntry } from "../components/TeachingSubject.js";
import {
  conferences,
  journalRefereeing,
  otherPublications,
  publications,
  teaching,
} from "../data.js";
import { BaseLayout } from "../layouts/BaseLayout.js";
import { div, h1, h2, li, ul, type ChildDom } from "../lib/html.js";
import type { Page } from "./page.js";

function Section(title: string, ...content: ChildDom[]): ChildDom[] {
  return [h2({ class: "section-title" }, title), div({ class: "section" }, content)];
}

export const academicWorkPage: Page = {
  outputPath: "academic-work/index.html",
  render: () =>
    BaseLayout(
      { title: "Academic Work", route: "/academic-work", activeMenuItem: "academic-work" },
      h1({ class: "page-title" }, "Academic Work"),

      Section("Publications", publications.map(PublicationEntry), div({ class: "divider" })),
      Section(
        "Other Publications",
        otherPublications.map(PublicationEntry),
        div({ class: "divider" }),
      ),
      Section("Teaching", teaching.map(TeachingSubjectEntry), div({ class: "divider" })),
      Section("Conferences", conferences.map(ConferenceEntry), div({ class: "divider" })),
      Section(
        "Journal Refereeing",
        ul({ class: "plain-list" }, journalRefereeing.map((journal) => li(`→ ${journal}`))),
      ),
    ),
};
