---
id: overview
title: Overview
sidebar_label: Overview
slug: /overview
---

# Overview

## What GhostMap is

GhostMap is a VS Code extension that turns structured `@ghost` comments into a navigable map of your file: a semantic tree of classes, functions, methods, interfaces and anchors that live next to the code they describe.

You write a comment like:

```ts
class AuthService {
  // @ghost description: validate jwt tokens | status: review
  login() {
    // ...
  }

  // @ghost description: revoke session | status: done
  logout() {
    // ...
  }
}
```

GhostMap renders it in the side panel as:

```text
AuthService
├── login          (review): validate jwt tokens
└── logout         (done): revoke session
```

No external task tracker, no extra config. The tree rebuilds itself as you type.

## Where to go next

- [Start](/): docs entry page.
- [Install](/install): current install reality (local VSIX), planned channels.
- [Requirements](/get-started/requirements): VS Code version, supported languages, tier matrix.
- [First 5 minutes](/get-started/first-5-minutes): your first `@ghost` walkthrough.
- [Guide / Philosophy](/guide/philosophy): symbols, anchors, ownership.
- [Syntax reference](/reference/syntax): every valid `@ghost` form.
- [Settings](/reference/settings): every `ghostmap.*` setting.
- [Architecture](/architecture/v1): the pipeline behind the tree.
- [Project status](/status/project-status): known limits.
- [Roadmap: v2 vision](/roadmap/v2): future direction.
- [FAQ](/faq), [Troubleshooting](/troubleshooting), [Glossary](/glossary).
- [Legal & Support](/legal-support): license summary, third-party notices, contact.
- [Changelog](/changelog): release history.

## Project status (short)

- Version 0.5.0, pre-release.
- VS Code engine `^1.85.0`.
- 19 languages supported across quality tiers.
- Distribution today: locally built VSIX, requested by email.
- Planned channels: GitHub Releases (post-tag), VS Code Marketplace, Open VSX. None of these are active yet: see [Install](/install) and [Project status](/status/project-status).

## License (short)

GhostMap is source-available under the **GhostMap Free Non-Commercial License**. Personal, educational, and evaluation use is free. Commercial use needs a written license. The `LICENSE` file shipped with the extension is the authoritative legal document. See [Legal & Support](/legal-support).
