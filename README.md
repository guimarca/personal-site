# personal-site

[![Build Status](https://travis-ci.org/guimarca/personal-site.svg?branch=master)](https://travis-ci.org/guimarca/personal-site) [![Coverage Status](https://coveralls.io/repos/github/guimarca/personal-site/badge.svg?branch=master)](https://coveralls.io/github/guimarca/personal-site?branch=master)

https://guimarca.github.io

> Guillem Martinez-Canovas

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

To build for production:

```
npm run build
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tests

```
npm test
```

To upload report to coveralls (.coveralls.yml with `repo_token: TOKEN` might be needed):

```
npm run coveralls
```

## Update dependencies

Install (if you have not not already) 

```
npm install -g npm-check-updates
```

Then:

```
ncu -u
npm update
```
