---
id: intro
title: GhostMap
slug: /
sidebar_label: Start
---

# Project structure, inside your code

GhostMap is a VS Code extension that turns structured `@ghost` comments into a navigable map of your code.

## The idea

`TODO`, `FIXME`, and `HACK` comments are useful, but they have no structure. GhostMap gives them a small grammar and connects them to real symbols: classes, functions, methods, interfaces, and anchors.

> The code stays the source of truth. Notes about the code live next to the code.

## How it looks

Write this:

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

GhostMap shows this in the side panel:

```text
AuthService
├── login          (review): validate jwt tokens
└── logout         (done): revoke session
```

No extra files. No external tracker. The tree rebuilds as you edit.

## Start here

- **[Overview](/overview)**: what GhostMap is and how it fits in your editor.
- **[Install](/install)**: current install path and planned channels.
- **[First 5 minutes](/get-started/first-5-minutes)**: write your first `@ghost` and see the tree.
- **[Syntax reference](/reference/syntax)**: every valid `@ghost` form.
- **[Settings](/reference/settings)**: tune ownership radius, file budgets, and more.
- **[Legal & Support](/legal-support)**: license summary and contact.
- **[Changelog](/changelog)**: release history.

## Three Ghost types

| Type | Example | What it does |
|---|---|---|
| **Contextual** | `// @ghost description: ... \| status: ...` | Attaches to the nearest symbol. |
| **Named (Semantic Anchor)** | `// @ghost #name description: ...` | Creates its own node in the tree. |
| **Range** | `// @ghost #name start ... // @ghost end` | Groups a whole code section under one node. |

GhostMap is source-available under the **GhostMap Free Non-Commercial License**. Personal, educational, and evaluation use is free. Commercial use needs written authorization. For licensing questions, write to [getghostmap@proton.me](mailto:getghostmap@proton.me).
