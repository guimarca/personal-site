# personal-site

https://guimarca.github.io

> Guillem Martinez-Canovas

A dependency-light site: plain TypeScript, no framework, no CSS
toolchain beyond Sass. The pages are rendered to static HTML at build time and
ship **zero** client-side JavaScript (bar three lines that keep the footer year
fresh).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). `dev` builds the site,
serves `dist/` and rebuilds on every change under `src/`, `data/` and `public/`.

```bash
npm run build     # production build into dist/
npm run preview   # serve an existing dist/
npm run typecheck # tsc --noEmit
```

## Tests

```bash
npm run test:e2e
```

Cypress starts the preview server itself, so `npm run build` is the only
prerequisite.

> Running inside the VS Code integrated terminal? VS Code exports
> `ELECTRON_RUN_AS_NODE=1`, which stops the Cypress binary from launching. Use
> `env -u ELECTRON_RUN_AS_NODE npm run test:e2e` there.

## How it is put together

| Path              | What it holds                                                           |
| ----------------- | ----------------------------------------------------------------------- |
| `data/*.json`     | All the content. Typed once in `src/data.ts`.                           |
| `src/models.ts`   | The shape of that content.                                              |
| `src/lib/html.ts` | Tag functions (VanJS' server-side flavour) plus `raw()`.                |
| `src/components/` | One function per component, returning an element.                       |
| `src/layouts/`    | The shared page chrome.                                                 |
| `src/pages/`      | One `Page` per URL; `src/pages/index.ts` lists them all.                |
| `src/styles/`     | Sass, organised by concern and loaded from `main.scss`.                 |
| `src/build.ts`    | Writes every page into `dist/`.                                         |
| `scripts/`        | The build pipeline and a static file server, both zero-dependency Node. |

### Adding a page

1. Add `src/pages/my-page.ts` exporting a `Page` (`outputPath` + `render`).
2. Register it in `src/pages/index.ts`.
3. If it needs a sidebar entry, add one to `MENU_ITEMS` in
   `src/components/SideBarMenu.ts` — the id doubles as the page's
   `activeMenuItem`.

### Styling

Colours, radii and other tokens live in `src/styles/_tokens.scss` as CSS custom
properties; the palette reproduces the daisyUI "garden" theme the previous
version used. Components use semantic class names, so a rule change is made in
one place rather than across the markup.

## Dependencies

Runtime: [devicon](https://devicon.dev) (technology icons, served from `dist/`).
Build only: TypeScript, [mini-van-plate](https://vanjs.org/minivan) (VanJS for
server-side rendering), Sass and Cypress. None of them pull in a dependency tree
of their own beyond type packages.

Font Awesome is loaded from a CDN, as it was before.

## Deployment

Pushing to `master` builds the site, runs the end-to-end tests and publishes
`dist/` to `guimarca/guimarca.github.io` (see `.github/workflows/main.yml`).
