/** A page of the site, as consumed by the build. */
export interface Page {
  /** Path of the generated file, relative to the output directory. */
  outputPath: string;
  /** Renders the complete HTML document. */
  render: () => string;
}
