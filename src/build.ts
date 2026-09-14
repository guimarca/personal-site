import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { pages } from "./pages/index.js";

const OUTPUT_DIR = resolve(fileURLToPath(new URL("../../dist", import.meta.url)));

/** Renders every page into the output directory. */
async function renderPages(): Promise<void> {
  await Promise.all(
    pages.map(async (page) => {
      const target = join(OUTPUT_DIR, page.outputPath);
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, page.render(), "utf8");
      console.log(`  rendered ${page.outputPath}`);
    }),
  );
}

await renderPages();
