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

Subpage routing relies on `vercel.json` setting `cleanUrls: true` together with `trailingSlash: false` in `docusaurus.config.js`: Docusaurus emits `path/page.html` and Vercel serves it at `/path/page`. If subpages 404 in production while local `build/` contains the file, verify the Vercel project setting **Output Directory** is empty (so `vercel.json`'s `outputDirectory: "build"` applies) and that **Clean URLs** is enabled.

## Content structure

| Path | Purpose |
|---|---|
| `docs/intro.md` | Root start page (slug `/`). |
| `docs/overview.md` | Product overview (slug `/overview`). |
| `docs/install.md` | Install / access (slug `/install`). |
| `docs/vsix-install.md` | Detailed VSIX install reference. |
| `docs/get-started/` | Requirements and the first-5-minutes walkthrough. |
| `docs/guide/` | Concepts: symbols, anchors, ownership, validity gate. |
| `docs/reference/` | Syntax, Ghost Tree, diagnostics, settings, performance. |
| `docs/architecture/` | V1 pipeline, loading policy, local state. |
| `docs/roadmap/` | V2 vision. |
| `docs/status/` | Project status and known limits. |
| `docs/legal-support.md` | License summary and support contact (slug `/legal-support`). |
| `docs/legal/` | Privacy Policy, Terms of Use, Third-Party Notices, Disclaimer. |
| `docs/changelog.md` | Release notes. |
| `docs/data-location.md`, `docs/troubleshooting.md`, `docs/faq.md`, `docs/glossary.md`, `docs/keyboard-shortcuts.md`, `docs/uninstall.md` | Standalone reference pages. |
| `sidebars.js` | Sidebar layout. |
| `docusaurus.config.js` | Site configuration. |
| `vercel.json` | Build and redirect config for Vercel. |

## Contributing to the docs

To add a new page:

1. Create the `.md` file under `docs/` (or the appropriate subfolder) with a YAML frontmatter block (`id`, `title`, `sidebar_label`, `slug`).
2. Add the page id to `sidebars.js` under the right category.
3. Run `npm run build` to verify the page renders and links resolve.
4. Open a pull request.

## Related surfaces

- Marketing site: [ghostmap-liard.vercel.app](https://ghostmap-liard.vercel.app/).
- Extension source: source-available; the public repo URL will be announced at release. For pre-release access write to [getghostmap@proton.me](mailto:getghostmap@proton.me).
