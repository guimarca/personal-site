import conferencesJson from "../data/conferences.json" with { type: "json" };
import contactJson from "../data/contact.json" with { type: "json" };
import descriptionJson from "../data/description.json" with { type: "json" };
import devProjectsJson from "../data/devProjects.json" with { type: "json" };
import educationJson from "../data/education.json" with { type: "json" };
import journalRefereeingJson from "../data/journalRefereeing.json" with { type: "json" };
import otherPublicationsJson from "../data/otherPublications.json" with { type: "json" };
import positionsJson from "../data/positions.json" with { type: "json" };
import publicationsJson from "../data/publications.json" with { type: "json" };
import teachingJson from "../data/teaching.json" with { type: "json" };

import type {
  Conference,
  Contact,
  Description,
  DevCompany,
  EducationItem,
  Position,
  Publication,
  TeachingSubject,
} from "./models.js";

/**
 * Single place where the raw JSON in `data/` gets a type. Everything else in
 * the site imports from here, so a change in the data shape surfaces once.
 */

export const conferences: Conference[] = conferencesJson;
export const contact: Contact = contactJson;
export const description: Description = descriptionJson;
export const devCompanies: DevCompany[] = Object.values(devProjectsJson);
export const education: EducationItem[] = educationJson;
export const journalRefereeing: string[] = journalRefereeingJson;
export const otherPublications: Publication[] = otherPublicationsJson;
export const positions: Position[] = positionsJson;
export const publications: Publication[] = publicationsJson;
export const teaching: TeachingSubject[] = teachingJson;
