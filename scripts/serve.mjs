#!/usr/bin/env node
// Minimal static file server for dist/, so the site can be previewed with the
// same absolute URLs it uses in production.

import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const DIST = resolve(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const PORT = Number(process.env["PORT"] ?? 4321);

const CONTENT_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".eot": "application/vnd.ms-fontobject",
  ".html": "text/html; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".gif": "image/gif",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

/** Maps a request path to a file inside dist/, or null when there is none. */
function resolveFile(urlPath) {
  const relative = normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, "");
  const candidate = join(DIST, relative);
  if (!candidate.startsWith(DIST)) return null;

  if (existsSync(candidate) && statSync(candidate).isDirectory()) {
    const index = join(candidate, "index.html");
    return existsSync(index) ? index : null;
  }
  return existsSync(candidate) ? candidate : null;
}

createServer((request, response) => {
  const { pathname } = new URL(request.url ?? "/", `http://${request.headers.host}`);
  const file = resolveFile(pathname) ?? join(DIST, "404.html");
  const found = file !== join(DIST, "404.html") || pathname === "/404.html";

  response.writeHead(found ? 200 : 404, {
    "content-type": CONTENT_TYPES[extname(file)] ?? "application/octet-stream",
  });
  createReadStream(file).pipe(response);
}).listen(PORT, () => {
  console.log(`• preview running at http://localhost:${PORT}`);
});
