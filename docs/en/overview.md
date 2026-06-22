---
title: GhostMap (English overview)
sidebar_label: Overview (EN)
slug: /en/overview
---

# GhostMap — English overview

> **English first.** This is the default start page. Spanish pages hold the
> detailed reference where English pages are still short.

## What GhostMap is

GhostMap is a VS Code extension that turns structured `@ghost` comments into a
navigable map of your file: a semantic tree of classes, functions, methods,
interfaces and anchors that live next to the code they describe.

You write a comment like:

```ts
class AuthService {
  // @ghost description: review security | status: todo
  login() {
    // ...
  }
}
```

GhostMap renders it in the side panel as:

```text
AuthService
└── login          (todo) — review security
```

No external task tracker, no extra config. The tree rebuilds itself as you type.

## Where to go next (English)

- [Install / Access (EN)](/en/install) — current install reality (local VSIX), planned channels.
- [Legal & Support (EN)](/en/legal-support) — license summary, third-party notices, contact.

## Spanish documentation

The reference, architecture, and concepts documentation is in Spanish:

- [Introducción (ES)](/) — landing page of the docs.
- [Instalación (ES)](/get-started/instalacion) — VSIX install guide.
- [Primeros 5 minutos (ES)](/get-started/primeros-5-minutos) — first `@ghost` walkthrough.
- [Conceptos / Guía (ES)](/guide/philosophy) — symbols, anchors, ownership radius.
- [Sintaxis (ES)](/reference/sintaxis) — full `@ghost` syntax reference.
- [Settings (ES)](/reference/settings) — every `ghostmap.*` setting.
- [Arquitectura v1 (ES)](/architecture/arquitectura-v1) — internals.
- [Estado del proyecto (ES)](/status/estado-del-proyecto) — known limits.
- [Roadmap V2 (ES)](/roadmap/vision-v2) — direction.

## Project status (short)

- Version 0.5.0, pre-release.
- VS Code engine `^1.85.0`.
- 19 languages supported across quality tiers.
- Distribution today: locally-built VSIX, requested by email.
- Planned channels: GitHub Releases (post-tag), VS Code Marketplace, Open VSX.
  None of these are active yet — see [Install / Access (EN)](/en/install).

## License (short)

GhostMap is source-available under the **GhostMap Free Non-Commercial License**.
Personal, educational, and evaluation use is free. Commercial use needs a
written license. The English `LICENSE` file shipped with the extension is the
authoritative legal document. See [Legal & Support (EN)](/en/legal-support).
