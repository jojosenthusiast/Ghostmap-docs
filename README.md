# GhostMap Documentation Site

This repository hosts the user-facing documentation for [GhostMap](https://ghostmap-liard.vercel.app/), a VS Code extension that turns `@ghost` annotations into a navigable Ghost Tree.

The site is built with [Docusaurus 3](https://docusaurus.io/) and is deployed on Vercel at [https://ghostmap-docs.vercel.app/](https://ghostmap-docs.vercel.app/).

## Local development

```bash
npm install
npm start
```

This launches the dev server on `localhost:3000` with hot reload.

## Build

```bash
npm run build
```

The static output is written to `build/` and can be served from any static host.

## Deploy

The docs site is deployed on Vercel at [https://ghostmap-docs.vercel.app/](https://ghostmap-docs.vercel.app/). Vercel builds from this repository's default branch using the standard Docusaurus build (`npm run build`, output in `build/`); see `docusaurus.config.js` for site configuration. Publish the marketing site after a docs deploy completes, because the marketing site links to the rendered docs routes.

## Languages

This docs site is **bilingual**:

- **Spanish (detailed docs)** — the primary, full documentation: requisitos,
  instalación, conceptos, sintaxis, referencia de settings, arquitectura,
  estado del proyecto, roadmap. Everything under `docs/` (except `docs/en/`)
  is the Spanish reference.
- **English (launch / quick-start / legal overview)** — a focused entry
  section under `docs/en/`: overview, install/access reality, and a legal
  & support summary. It is **not** a full translation; each English page
  links back to the equivalent Spanish page for detail.
- **Legal documents (English-authoritative)** — `docs/legal/*` and the
  shipped `LICENSE` / `THIRD_PARTY_NOTICES.txt` are in English as the
  canonical legal version. The Spanish docs reference them, they are not
  re-translated.

## Content structure

| Folder | Purpose |
|---|---|
| `docs/intro.md` | Landing page of the documentation (Spanish). |
| `docs/en/` | English overview, install/access, legal & support summary. |
| `docs/get-started/` | Requisitos, instalación, primeros 5 minutos (ES). |
| `docs/guide/` | Conceptos: symbols, anchors, ownership, validity gate, etc. (ES). |
| `docs/reference/` | Syntax, Ghost Tree, diagnostics, settings, rendimiento (ES). |
| `docs/architecture/` | Arquitectura v1, loading policy, local state (ES). |
| `docs/roadmap/` | Visión v2 (ES). |
| `docs/status/` | Estado del proyecto y limitaciones conocidas (ES). |
| `docs/changelog.md` | User-visible release notes. |
| `docs/legal/` | Privacy Policy, Terms of Use, Third-Party Notices, Disclaimer (English-authoritative). |
| `sidebars.js` | Sidebar layout (includes both the English section and the Spanish categories). |
| `docusaurus.config.js` | Site configuration (navbar has an `English` entry and the footer has an `English` column). |

## Contributing to the docs

The detailed reference is in Spanish. The English section is intentionally an
overview/quick-start/legal entry — not a 1:1 translation. The legal section
and the changelog are English-authoritative.

To add a new page:

1. Create the `.md` file under the appropriate `docs/<category>/` folder with a YAML frontmatter block (`id`, `title`, `sidebar_label`).
2. Add the page id to `sidebars.js` under the right category.
3. Run `npm start` to verify the page renders and links resolve.
4. Open a pull request.

## Related surfaces

- Marketing site: [ghostmap-liard.vercel.app](https://ghostmap-liard.vercel.app/).
- Extension source: source-available; the public repo URL will be announced at release. For pre-release access write to [getghostmap@proton.me](mailto:getghostmap@proton.me).
