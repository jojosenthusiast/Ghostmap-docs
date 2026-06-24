---
id: uninstall
title: How to uninstall
sidebar_label: Uninstall
---

# How to uninstall GhostMap

Three steps: remove the extension, optionally clean the settings, optionally delete the workspace caches.

## 1. Remove the extension

From VS Code:

1. Open the **Extensions** panel (`Ctrl+Shift+X` / `Cmd+Shift+X`).
2. Search **GhostMap**.
3. Click the gear icon, **Uninstall**.

From the command line:

```bash
code --uninstall-extension ghostmap.ghostmap
```

VS Code will ask you to reload the window. After that the panel and the `GhostMap: *` commands disappear.

## 2. (Optional) Remove the settings

VS Code keeps settings for uninstalled extensions in case you reinstall. If you want to clean them:

1. Open `settings.json` (User or Workspace).
2. Delete any key that starts with `"ghostmap."`.

There is no side effect; if you reinstall later, GhostMap uses the defaults.

## 3. (Optional) Delete the `.ghostmap/` caches

GhostMap leaves a `.ghostmap/ghostmap.json` file per workspace you touched. If you want to wipe them all:

**Cross-platform (Node):**

```bash
# Find and remove .ghostmap/ recursively from a root directory that contains your projects.
# Mind the scope: this command removes EVERY .ghostmap it finds from where you launch it.
node -e "const fs=require('fs'),p=require('path');function walk(d){for(const f of fs.readdirSync(d,{withFileTypes:true})){const x=p.join(d,f.name);if(f.isDirectory()){if(f.name==='.ghostmap'){fs.rmSync(x,{recursive:true,force:true});console.log('deleted',x);}else if(f.name!=='node_modules'&&f.name!=='.git'){walk(x);}}}};walk(process.cwd());"
```

Or simply, in each workspace, manually:

```bash
rm -rf .ghostmap/
```

```powershell
Remove-Item -Recurse -Force .ghostmap\
```

## What you do NOT need to touch

- The **Tree-sitter grammars** already live inside the extension folder (`~/.vscode/extensions/ghostmap.ghostmap-<version>/`). When you uninstall the extension, VS Code cleans that folder automatically.
- There are no environment variables, daemons, or background services. GhostMap only lives as an Extension Host process.

## Reinstall

If you decide to come back, the steps are the same as the first time: see [Install](/install). Your `.gitignore` and your settings (if you did not delete them) stay where they were.

## Why would I leave?

If you hit a problem, consider sending a mail to [getghostmap@proton.me](mailto:getghostmap@proton.me) before going. The project is in active development and concrete reports are what close the gaps.
