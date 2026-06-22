---
id: intro
title: GhostMap
slug: /
sidebar_label: Start
---

# Project structure, inside your code

GhostMap is a VS Code extension that turns structured `@ghost` comments into a
navigable map of your code.

This site starts in English. The detailed reference is still in Spanish.

## The idea

`TODO`, `FIXME`, and `HACK` comments are useful, but they have no structure.
GhostMap gives them a small grammar and connects them to real symbols: classes,
functions, methods, interfaces, and anchors.

> The code stays the source of truth. Notes about the code live next to the code.

## How it looks

Write this:

```ts
class AuthService {
  // @ghost description: review security | status: todo
  login() {
    // ...
  }
}
```

GhostMap shows this in the side panel:

```text
AuthService
└── login          (todo): review security
```

No extra files. No external tracker. The tree rebuilds as you edit.

## Start here

- **[Install / Access](/en/install)**: current install path and planned channels.
- **[Legal & Support](/en/legal-support)**: license summary and contact.
- **[Spanish install guide](/get-started/instalacion)**: detailed VSIX steps.
- **[Spanish first 5 minutes](/get-started/primeros-5-minutos)**: write your first `@ghost`.
- **[Spanish syntax reference](/reference/sintaxis)**: full `@ghost` syntax, commands, and settings.

## Three Ghost types

| Type | Example | What it does |
|---|---|---|
| **Contextual** | `// @ghost description: ... \| status: ...` | Attaches to the nearest symbol. |
| **Named (Semantic Anchor)** | `// @ghost #name description: ...` | Creates its own node in the tree. |
| **Range** | `// @ghost #name start ... // @ghost end` | Groups a whole code section under one node. |

GhostMap is source-available under the **GhostMap Free Non-Commercial License**.
Personal, educational, and evaluation use is free. Commercial use needs written
authorization. For licensing questions, write to
[getghostmap@proton.me](mailto:getghostmap@proton.me).
