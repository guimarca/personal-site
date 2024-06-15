# personal-site

![master](https://github.com/guimarca/personal-site/actions/workflows/main.yml/badge.svg)

https://guimarca.github.io

> Guillem Martinez-Canovas

## Getting Started

Install pnpm:

```bash
npm i -g pnpm
```

Run dev server:

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

```bash
npm run build
```

## Tests

```bash
npm test
```

To upload report to coveralls (.coveralls.yml with `repo_token: TOKEN` might be needed):

```bash
npm run coveralls
```

## Update dependencies

Install (if you have not not already)

```bash
npm i -g npm-check-updates
```

Then:

```bash
ncu -u
npm update
```

Built with [Astrofy](https://github.com/manuelernestog/astrofy)
