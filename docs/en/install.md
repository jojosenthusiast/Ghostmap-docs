---
title: Install & Access (English)
sidebar_label: Install / Access (EN)
slug: /en/install
---

# Install & Access — English quick-start

> **Detailed Spanish guide:** [Instalación (ES)](/get-started/instalacion).
> This page is the short English version.

## Current install reality

GhostMap is not yet published on the VS Code Marketplace or Open VSX. The
current way to install it is a **locally-built VSIX**, distributed on request.

### Request a VSIX

Send an email to [getghostmap@proton.me](mailto:getghostmap@proton.me?subject=GhostMap%20VSIX%20request)
describing your use case. You will receive the same `.vsix` binary the
extension repository produces.

### Install it

Once you have the `.vsix` file:

```powershell
code --install-extension ghostmap-0.5.0.vsix
```

Or, in VS Code: `Extensions` panel → `…` menu → `Install from VSIX…` →
select the file.

After install:

1. Open a file in any supported language (TypeScript, Python, Rust, C#, Java,
   PHP, C++, Go, Ruby, Dart, etc. — 19 in total).
2. Open the **GhostMap** view in the activity bar.
3. The tree shows every detected symbol; click an item to jump.
4. Drop a `@ghost` anchor in a comment — it appears in the tree.

## Planned channels (not active today)

| Channel | Status | Notes |
| --- | --- | --- |
| Local VSIX on request | Active | Email `getghostmap@proton.me`. |
| GitHub Releases | Planned, post-tag | No public tagged release exists yet. |
| VS Code Marketplace | Planned | Depends on publisher onboarding. No fake link is published anywhere. |
| Open VSX | Planned | Bridge for VSCodium and Open VSX-compatible editors; needs a namespace + token. |

When a channel becomes active, the link will appear here and on the docs
landing page. The project does not publish placeholder Marketplace, Open VSX,
Lemon Squeezy, Patreon, or Ko-fi links that do not resolve.

## See also

- [Spanish install guide (detailed)](/get-started/instalacion).
- [VSIX install reference](/vsix-install).
- [Requirements](/get-started/requisitos).
- [First 5 minutes (ES)](/get-started/primeros-5-minutos).
