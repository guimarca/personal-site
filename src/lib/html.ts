import van from "mini-van-plate/van-plate";
import type { ChildDom, Element } from "mini-van-plate/van-plate";

/**
 * Thin wrapper around VanJS' server-side flavour (`mini-van-plate`), which
 * renders a tree of tag calls straight to an HTML string at build time.
 */

export type { ChildDom };
/** A renderable node produced by any of the tag functions below. */
export type VanElement = Element;

export const {
  a,
  aside,
  body,
  circle,
  div,
  footer,
  h1,
  h2,
  h3,
  h4,
  head,
  header,
  i,
  img,
  input,
  label,
  li,
  link,
  main,
  meta,
  nav,
  p,
  path,
  script,
  span,
  strong,
  svg,
  title,
  ul,
} = van.tags;

/** Renders a full document, including the doctype. */
export const document = van.html;

const elementProto = Object.getPrototypeOf(span());

/**
 * Embeds a pre-built HTML string verbatim. Tag functions escape plain text
 * children, so this is the escape hatch for the markup that lives in `data/`.
 */
export function raw(markup: string): VanElement {
  return Object.assign(Object.create(elementProto) as VanElement, {
    renderToBuf: (buf: string[]) => buf.push(markup),
    render: () => markup,
  });
}
