---
id: requirements
title: Requirements
sidebar_label: Requirements
---

# Requirements

GhostMap is a VS Code extension. There is no server, no external account, and no system dependency outside the editor.

## Editor

| Requirement | Value |
|---|---|
| Visual Studio Code | **1.85 or newer** (declared in `engines.vscode`). VS Code will warn you if your version is older. |
| Operating system | Windows, macOS, Linux. Any platform where VS Code runs. |

GhostMap targets **VS Code Desktop**. VS Code Web (`vscode.dev` / `github.dev`) and remote setups can restrict the filesystem, the Extension Host, or installable extensions. They are not a verified surface in V1. If you use Remote SSH, Dev Containers, WSL, or Codespaces, validate the behavior in your environment before depending on GhostMap for critical work.

> **Note:**
> GhostMap was developed and tested mainly on Windows. File paths use `path.sep` for cross-platform compatibility, but macOS and Linux have not been exhaustively verified in V1. If you hit a platform-specific problem, write to [getghostmap@proton.me](mailto:getghostmap@proton.me).

## Project language

You do not need to install anything else just to use GhostMap. The extension ships:

- **19 Tree-sitter grammars compiled to WASM**, packed inside the extension. Nothing is downloaded at runtime.
- **Regex fallback** that works with no external dependency.

The only optional dependency that improves tree quality is an active **language server (LSP)** for your language. GhostMap uses it automatically when available; otherwise it drops to the next extraction layer on its own.

## Language quality matrix

| Tier | What to expect | Languages |
|---|---|---|
| **Tier 1: first-class** | Full symbol extraction and nesting on the current fixtures. Recommended tier to evaluate GhostMap. | TypeScript, TSX, JavaScript, JSX, Python, Rust, C#, Java, C++, C, PHP, Ruby, Dart |
| **Tier 2: best-effort** | Top-level symbols are available; nesting or some constructs may be partial depending on the file. | Go, Groovy, Objective-C |
| **Tier 3: top-level only** | Coarse index useful for orientation; deep nesting should not be assumed reliable. | Scala, Solidity, Julia, Elixir |

If your language is Tier 2 or Tier 3, the fallback still tries to give you a useful tree, but the expected precision is lower than Tier 1. For critical flows, verify the result against the file before treating it as the single source of truth.

> **Language expansion (separate workstream):**
> Roughly 20 additional languages are planned (Kotlin, Swift, Haskell, OCaml, Lua, R, Bash, the SQL family, and others). They are a separate workstream, blocked by:
>
> - reproducible packaging and provenance for Tree-sitter grammars and WASM,
> - query validity against the exact grammar version we ship or fork,
> - fixture coverage per language in `test/matrix/`,
> - and, in some cases, upstream PRs to the grammars themselves.
>
> These languages are **not** announced as supported until they pass that gate. If you open an item in one of them, GhostMap behaves as it does for an unknown language (no symbol tree appears). See [Disclaimer](/legal/disclaimer).

## RAM and CPU

GhostMap does not document a strict minimum RAM requirement. Some behaviors to keep in mind on low-memory machines:

- With **80 to 90 percent RAM in use**, a language server can take 5 to 30 seconds to start. GhostMap waits up to 800 ms and then drops to the fallback automatically. The tree still appears, but with less detail than the LSP would give.
- In those conditions the **Ghost Index** is especially useful: instead of waiting for the LSP on every open, the tree loads from the local snapshot in under 50 ms.

## Very large projects

GhostMap analyzes files, not whole workspaces. For very large files there are automatic limits:

| Limit | Default value | Setting to adjust it |
|---|---|---|
| Lines per file (auto-refresh) | 60,000 lines | `ghostmap.loading.maxAutoLines` |
| Size per file (auto-refresh) | 10 MB | `ghostmap.loading.maxAutoBytes` |
| "Tiny" files (no backpressure) | 50 lines or fewer | `ghostmap.loading.tinyLineThreshold` |

If you regularly work with files that exceed those limits, raise them in `settings.json`. See [Settings](/reference/settings) and [Loading Policy](/architecture/loading-policy) for the detail.

## Quick summary

If VS Code 1.85 or newer runs on your machine, GhostMap runs on your machine. Performance limits show up on very large files or under extreme RAM pressure, not in normal use.
