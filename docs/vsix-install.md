---
id: vsix-install
title: Install from a VSIX file
sidebar_label: Install from VSIX
---

# Install GhostMap from a VSIX file

Today the VSIX delivered by direct contact is the **only** install path for GhostMap, not just a fallback. The package is not yet on the VS Code Marketplace (publisher onboarding is pending) and Open VSX has the publish script (`publish:open-vsx`, calling `ovsx publish`) prepared in `package.json`, but the namespace on open-vsx.org, the token, and the first publish are still pending. GitHub Releases is the planned post-tag channel; there is no public release yet and the source repository is still private. In the meantime, every user (including users on standard VS Code) installs via VSIX received by email.

See the per-channel state in **[Install](/install)**.

This file is also useful when you later need:

- **Offline** install or a machine without network access.
- **Pinning** to a specific version for reproducibility.
- Corporate setups where Marketplace and Open VSX are blocked.

## Get the VSIX

### Option A (recommended today): request the VSIX by email

Write to [getghostmap@proton.me](mailto:getghostmap@proton.me) saying you want the install package. You will receive the `ghostmap-0.5.0.vsix` file ready to install.

This is the official path while Marketplace, Open VSX, and the public repository are pending.

### Option B: build the VSIX from source (requires repo access)

The `genesis` repository is private and access is limited. If you have explicit access, you can package it yourself:

```bash
cd genesis
npm install
npm run compile
npx @vscode/vsce package --out ghostmap.vsix
```

The `ghostmap.vsix` file lands in the current directory. If you do not have repo access, use Option A.

### Option C: download a published VSIX when one exists

When a public release exists, the VSIX will be announced through the official distribution channels (this document will be updated with the exact URL). Until then, use Option A.

## Install the VSIX

### From VS Code (UI)

1. Open the **Extensions** panel (`Ctrl+Shift+X` / `Cmd+Shift+X`).
2. Click the "..." menu on the top bar of the panel.
3. **Install from VSIX...**
4. Pick the `ghostmap.vsix` file.
5. VS Code installs and asks you to reload.

### From the command line

```bash
code --install-extension ghostmap.vsix
```

## Verify the install

After reloading VS Code:

1. Open any file of a supported language (for example `.ts`).
2. A new ghost icon should appear in the left side bar.
3. Click the icon: the **GhostMap** panel shows the symbol tree of the active file.

If the panel is empty and the file has symbols, open the palette and run `GhostMap: Refresh`; if it is still empty, write to getghostmap@proton.me with the VS Code version and the file's language.

## Update to a new version

Repeat the process with the new VSIX. VS Code detects it as a new version of the same extension and updates it in place. There is no need to uninstall first.

## VSIX mode restrictions

When you install from VSIX (which is the default mode today):

- VS Code does **not** notify you automatically when a new version exists. You have to check manually, or, when public releases exist, the GitHub Releases page.
- The extension is marked as "side-loaded" and does not appear in your synced extensions if you use Settings Sync.
- In IT-managed environments, policy may block VSIX installs. Check with your administrator.

When GhostMap is published on VS Code Marketplace and Open VSX (both pending/planned: see [Project status](/status/project-status)), in-editor update notifications and Settings Sync will work in the standard way.

## Next step

Continue with **[First 5 minutes](/get-started/first-5-minutes)** to write your first `@ghost` anchor.
