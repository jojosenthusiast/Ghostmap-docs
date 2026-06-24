---
id: install
title: Install
sidebar_label: Install
slug: /install
---

# Install

## What is a VSIX?

A `.vsix` file is the packaged VS Code extension format, the same thing the Marketplace serves under the hood. As a normal user you do not build it: the GhostMap maintainers build the `.vsix` from the private extension source and send you that file. Installing it is one command or one menu click.

## Current install reality

GhostMap is not yet published on the VS Code Marketplace or Open VSX. The current way to install it is a **locally built VSIX**, distributed on request.

### Request a VSIX

Send an email to [getghostmap@proton.me](mailto:getghostmap@proton.me?subject=GhostMap%20VSIX%20request) describing your use case. You will receive the same `.vsix` binary the extension repository produces.

### Install it

Once you have the `.vsix` file:

```powershell
code --install-extension ghostmap-0.5.0.vsix
```

Or, in VS Code: open the **Extensions** panel, click the `...` menu, choose **Install from VSIX...**, and pick the file.

After install:

1. Open a file in any supported language (TypeScript, Python, Rust, C#, Java, PHP, C++, Go, Ruby, Dart, and others: 19 in total).
2. Open the **GhostMap** view in the activity bar.
3. The tree shows every detected symbol; click an item to jump.
4. Drop a `@ghost` anchor in a comment: it appears in the tree.

### Update or uninstall

To update, install a newer `.vsix` over the existing one with the same command. To uninstall, run:

```powershell
code --uninstall-extension ghostmap.ghostmap
```

Or use the Extensions panel: find GhostMap, click the gear icon, choose **Uninstall**.

## Planned channels (not active today)

| Channel | Status | Notes |
| --- | --- | --- |
| Local VSIX on request | Active | Email `getghostmap@proton.me`. |
| GitHub Releases | Planned, post-tag | No public tagged release exists yet. |
| VS Code Marketplace | Planned | Depends on publisher onboarding. No placeholder link is published anywhere. |
| Open VSX | Planned | Bridge for VSCodium and Open VSX-compatible editors; needs a namespace and token. |

When a channel becomes active, the link will appear here and on the docs landing page. The project does not publish placeholder Marketplace, Open VSX, Lemon Squeezy, Patreon, or Ko-fi links that do not resolve.

## Next step

- Check [Requirements](/get-started/requirements) if you want to confirm GhostMap fits your machine and language.
- Continue with [First 5 minutes](/get-started/first-5-minutes) to write your first `@ghost`.
- See [Install from VSIX](/vsix-install) for offline, pinning, and corporate setups.
