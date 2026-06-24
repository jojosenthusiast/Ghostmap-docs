---
id: project-status
title: Project status
sidebar_label: Project status
---

# Project status

> **V1 in final testing:**
> GhostMap V1 has good functional and test coverage, but is still going through final manual validation before a wider release. Some functions may behave slightly differently from the description until those validations are finished.

## Distribution status

| Channel | Status | Notes |
| --- | --- | --- |
| Local VSIX | Available | Main path today. See [Install](/install) and [Install from VSIX](/vsix-install). |
| GitHub Releases | Planned post-tag | No public release yet. Future releases can attach the VSIX after a tag is created. |
| VS Code Marketplace | Pending | The package does not have a `publisher` yet; there is no official listing. |
| Open VSX (VSCodium, Cursor, etc.) | Planned | Recommended bridge for Open-VSX-compatible editors. The `publish:open-vsx` script (`ovsx publish`) is already prepared in `package.json`; namespace, token, and first publish are pending. |

No change in these channels affects code you already have installed via VSIX: once installed, the extension runs locally with no network access.

## Available today (v1)

- Symbol-first hierarchy (symbols first, Ghosts after).
- Contextual Ghost ownership.
- Named anchors (`#name`).
- Range anchors.
- Diagnostics (`unclosed-range`, `malformed-syntax`, `detached`, `ambiguous`, etc.).
- Hover with descriptions.
- Status tracking.
- Multi-language parsing (LSP, Tree-sitter, regex fallback).
- Native VS Code integration.

## Known MVP limitations

- **Very large files:** files over 60,000 lines are not recomputed automatically to avoid blocking the editor. See [Loading Policy](/architecture/loading-policy) for the detail and how to enable manual refresh.
- **Unnamed ranges:** a `@ghost ... start` without `#name` is syntactically valid, but does not produce a visible node in the tree. See [Range Anchor](/guide/range-anchor#important-the-name-is-required-for-the-range-to-show).
- **Line comments only:** `@ghost` annotations inside block comments (`/* */`, `/** */`) are not recognized in V1. See [Syntax: line comments only](/reference/syntax#line-comments-only).

## Warnings and future direction

- **Project languages (separate workstream):** GhostMap supports 19 languages today. An expansion of roughly 20 more is planned, blocked by Tree-sitter WASM packaging and provenance, query validity, and fixture coverage. Those languages are not announced as supported until they pass that gate. See [Requirements](/get-started/requirements) and [Disclaimer](/legal/disclaimer).
- **V2 engine and Enterprise integrations (not shipped):** workspace-level indexing, the Ghost Watcher, and Enterprise integrations (Jira / Slack, Ghost Threads, Ghost Graph, dashboards, AI explanations, permissions / audit log) are designed but **not shipped**. Any integration with server services would need its own clear privacy notice and explicit consent before leaving. See [Roadmap: v2 vision](/roadmap/v2). For a copy of the active Privacy Policy, write to [getghostmap@proton.me](mailto:getghostmap@proton.me).

## Next steps

See **[Roadmap: v2 vision](/roadmap/v2)** for the longer-term direction.
