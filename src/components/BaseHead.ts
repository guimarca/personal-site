import {
  DEFAULT_SOCIAL_IMAGE,
  SITE_KEYWORDS,
  SITE_META_DESCRIPTION,
  SITE_URL,
} from "../config.js";
import { link, meta, title as titleTag, type ChildDom } from "../lib/html.js";

export interface HeadProps {
  /** Full document title, already prefixed with the site name. */
  title: string;
  description: string;
  /** Canonical path of the page, e.g. `/cv`. */
  route: string;
  /** Path of the social preview image. */
  image?: string;
  ogType?: string;
}

/** Everything that goes inside `<head>`, shared by every page. */
export function BaseHead({
  title,
  description,
  route,
  image = DEFAULT_SOCIAL_IMAGE,
  ogType = "website",
}: HeadProps): ChildDom[] {
  const url = new URL(route, SITE_URL).href;
  const imageUrl = new URL(image, SITE_URL).href;

  return [
    meta({ charset: "utf-8" }),
    meta({ name: "viewport", content: "width=device-width,initial-scale=1" }),
    meta({ name: "description", content: SITE_META_DESCRIPTION }),
    meta({ name: "keywords", content: SITE_KEYWORDS }),

    titleTag(title),
    meta({ name: "title", content: title }),
    link({ rel: "canonical", href: url }),

    link({ rel: "icon", type: "image/png", sizes: "16x16", href: "/img/favicon-16x16.png" }),
    link({ rel: "icon", type: "image/png", sizes: "32x32", href: "/img/favicon-32x32.png" }),
    link({ rel: "icon", type: "image/png", sizes: "96x96", href: "/img/favicon-96x96.png" }),

    meta({ property: "og:type", content: ogType }),
    meta({ property: "og:url", content: url }),
    meta({ property: "og:title", content: title }),
    meta({ property: "og:description", content: description }),
    meta({ property: "og:image", content: imageUrl }),

    meta({ property: "twitter:card", content: "summary_large_image" }),
    meta({ property: "twitter:url", content: url }),
    meta({ property: "twitter:title", content: title }),
    meta({ property: "twitter:description", content: description }),
    meta({ property: "twitter:image", content: imageUrl }),

    link({ rel: "stylesheet", href: "/assets/css/main.css" }),
    link({ rel: "stylesheet", href: "/assets/devicon/devicon.min.css" }),
    link({
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
      integrity:
        "sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==",
      crossorigin: "anonymous",
      referrerpolicy: "no-referrer",
    }),
  ];
}
