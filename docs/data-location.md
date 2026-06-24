---
id: data-location
title: Where does GhostMap store data?
sidebar_label: Where your data lives
---

# Where does GhostMap store data?

Short answer: **everything stays on your machine**. GhostMap does not send anything to any server.

This page details what it stores, where it stores it, and how to wipe it if you want to start fresh.

## The `.ghostmap/ghostmap.json` cache

**Location:** inside each open workspace, at `.ghostmap/ghostmap.json`.

**Contents:** snapshots of the symbol and anchor trees for the files you have opened in that workspace. Each entry includes:

- File URI
- Language
- Line and byte counts
- SHA-256 fingerprint of the content (to detect changes)
- Extracted symbol list (classes, functions, etc.)
- Resolved hierarchy
- Parsed `@ghost` anchor list
- Capture timestamp

**Maximum size:** 2 MB per workspace. When the limit is hit, the oldest entries are removed first (FIFO by `capturedAt`).

**Format:** JSON with `schemaVersion: 1`.

## VS Code settings

`ghostmap.*` settings live where VS Code stores any setting:

- **User settings:** `%APPDATA%\Code\User\settings.json` (Windows), `~/Library/Application Support/Code/User/settings.json` (macOS), `~/.config/Code/User/settings.json` (Linux).
- **Workspace settings:** `.vscode/settings.json` inside the project.

GhostMap never writes settings automatically; you decide when to change one.

## The extension itself

VS Code installs extensions in:

- **Windows:** `%USERPROFILE%\.vscode\extensions\ghostmap.ghostmap-<version>`
- **macOS / Linux:** `~/.vscode/extensions/ghostmap.ghostmap-<version>`

Inside the extension folder live the compiled code, the WASM grammars, and the snippets. GhostMap does not touch this folder at runtime except to read resources.

## What GhostMap NEVER stores

- No local log outside the VS Code Output console (when you enable `performanceLogging`).
- No telemetry.
- No user, machine, or session identity.
- No history of opened files outside the persistent snapshot for the active workspace.

## Should I add it to `.gitignore`?

**Yes, to avoid polluting the repo with generated cache.** Add to your `.gitignore`:

```text
.ghostmap/
```

Reasons:

1. The snapshot depends on the state of files on your disk. Every dev on the team would regenerate it with their own content.
2. The SHA-256 fingerprint invalidates most of the cache when someone pulls, so checking it in does not speed anything up for the team.

## Manual cleanup

If you want to force GhostMap to recompute everything cached for a workspace:

```bash
# From the workspace root
rm -rf .ghostmap/
```

```powershell
# PowerShell
Remove-Item -Recurse -Force .ghostmap\
```

GhostMap regenerates the snapshot the next time you open a file in that workspace. The first open of each file pays the full extraction cost; later opens are instant again.

## Global cleanup (uninstall)

If you want to remove GhostMap completely from the machine, see **[How to uninstall](/uninstall)**.
