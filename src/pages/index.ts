import { academicWorkPage } from "./academicWork.js";
import { contactPage } from "./contact.js";
import { cvPage } from "./cv.js";
import { devProjectsPage } from "./devProjects.js";
import { homePage } from "./home.js";
import { notFoundPage } from "./notFound.js";
import type { Page } from "./page.js";

export const pages: Page[] = [
  homePage,
  cvPage,
  devProjectsPage,
  academicWorkPage,
  contactPage,
  notFoundPage,
];
