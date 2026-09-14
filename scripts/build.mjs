#!/usr/bin/env node
// Builds the static site into dist/:
//   1. TypeScript sources  -> build/   (compiled with tsc)
//   2. build/src/build.js  -> dist/*.html
//   3. src/styles/main.scss -> dist/assets/css/main.css
//   4. public/ and the devicon icon font -> dist/
//
// Flags: --watch rebuilds on change, --serve also starts the preview server.

import { spawn, spawnSync } from "node:child_process";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync, watch } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const BUILD = join(ROOT, "build");

const TSC = join(ROOT, "node_modules", "typescript", "bin", "tsc");
const SASS = join(ROOT, "node_modules", "sass", "sass.js");
const DEVICON = join(ROOT, "node_modules", "devicon");

/** Runs a Node script and throws if it fails. */
function run(script, args) {
  const { status, error } = spawnSync(process.execPath, [script, ...args], {
    cwd: ROOT,
    stdio: "inherit",
  });
  if (error) throw error;
  if (status !== 0) throw new Error(`${script} exited with code ${status}`);
}

async function clean() {
  await Promise.all([rm(DIST, { recursive: true, force: true }), rm(BUILD, { recursive: true, force: true })]);
}

async function copyStaticAssets() {
  await cp(join(ROOT, "public"), DIST, { recursive: true });

  if (!existsSync(DEVICON)) {
    throw new Error("devicon is not installed; run `npm install` first");
  }
  const deviconOut = join(DIST, "assets", "devicon");
  await mkdir(join(deviconOut, "fonts"), { recursive: true });
  await cp(join(DEVICON, "fonts", "devicon.woff"), join(deviconOut, "fonts", "devicon.woff"));

  // devicon ships the same font four times over (eot/svg/ttf/woff, ~10MB of
  // them); woff alone covers every browser still in use.
  const stylesheet = await readFile(join(DEVICON, "devicon.min.css"), "utf8");
  await writeFile(
    join(deviconOut, "devicon.min.css"),
    stylesheet.replace(
      /src:url\("fonts\/devicon\.eot.*?format\("svg"\);/,
      'src:url("fonts/devicon.woff") format("woff");',
    ),
    "utf8",
  );
}

async function build() {
  const startedAt = Date.now();
  await clean();

  console.log("• compiling TypeScript");
  run(TSC, []);

  console.log("• rendering pages");
  run(join(BUILD, "src", "build.js"), []);

  console.log("• compiling styles");
  run(SASS, [
    join(ROOT, "src", "styles", "main.scss"),
    join(DIST, "assets", "css", "main.css"),
    "--no-source-map",
    "--style=compressed",
  ]);

  console.log("• copying assets");
  await copyStaticAssets();

  console.log(`✓ built in ${Date.now() - startedAt}ms`);
}

/** Rebuilds on any change under the watched directories, debounced. */
function watchSources() {
  const directories = ["src", "data", "public"].map((name) => join(ROOT, name));
  let pending;

  for (const directory of directories) {
    watch(directory, { recursive: true }, () => {
      clearTimeout(pending);
      pending = setTimeout(() => {
        build().catch((error) => console.error(error.message));
      }, 100);
    });
  }
  console.log("• watching for changes");
}

const args = process.argv.slice(2);

if (args.includes("clean")) {
  await clean();
} else {
  await build();

  if (args.includes("--serve")) {
    spawn(process.execPath, [join(ROOT, "scripts", "serve.mjs")], { stdio: "inherit" });
  }
  if (args.includes("--watch")) {
    watchSources();
  }
}
