---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---

# Troubleshooting

Common symptoms, what causes them, and how to confirm it.

## The GhostMap panel is empty

**Most likely cause:** the active file is not a supported language, or it has no detectable symbols (config file, plain JSON, etc.).

**Confirm:**
1. Look at the VS Code status bar, lower right corner: it shows the Language ID.
2. Compare against the language matrix in [Symbol](/guide/symbol).
3. Open another clearly supported file (for example a `.ts`). If you see the tree there, the original file was the problem.

**Other possible causes:**
- The file only has symbols with names rejected by the [Symbol Validity Gate](/guide/symbol-validity-gate) (single letters, reserved words, etc.).
- The file exceeds `ghostmap.loading.maxAutoLines` or `ghostmap.loading.maxAutoBytes`. In that case the header badge will say `[skipped]`. See [Loading Policy](/architecture/loading-policy).

## The header badge stays on `[loading]`

**Most likely cause:** the language server is cold and under RAM pressure, taking more than 800 ms to respond. GhostMap drops automatically to the Tree-sitter + regex fallback, so the tree should appear even if with less detail.

**Confirm:**
1. Enable logging: `"ghostmap.performanceLogging": true` in `settings.json`.
2. Reproduce the problem.
3. Open `Output → GhostMap`. Look for `lsp.timeout` or `refresh.completed` events.

**Immediate mitigation:** switch to another tab and back. That forces a fresh refresh.

## The tree shows "old" data

The badge will say `[cached]` or `[stale-cache]`. It means GhostMap is painting from the persistent snapshot while a fresh refresh is in flight. In a few seconds the tree updates.

If the badge stays on `[stale-cache]` indefinitely, run `GhostMap: Refresh` from the command palette.

## An anchor exists but does not show in the tree

**Likely cause:** the anchor is inside a block comment (`/* @ghost ... */`) or JSDoc (`/** @ghost ... */`). In V1 only anchors inside line comments (`//` or `#`) are recognized. See [Syntax: line comments only](/reference/syntax#line-comments-only).

**Another cause:** a Range Anchor without `#name`. It is syntactically valid but does not produce a node. See [Range Anchor](/guide/range-anchor#important-the-name-is-required-for-the-range-to-show).

## "Unclosed ranges" or diagnostics in the editor

GhostMap detects several common errors and reports them as inline diagnostics with quick fixes. The full list is in [Diagnostics](/reference/diagnostics).

## GhostMap feels slow on fast tab switching

The behavior is intentional: when it detects fast tab switches (less than 150 ms between them), GhostMap applies a 200 ms backpressure to avoid queueing unnecessary analyses. Small files (50 lines or fewer) skip this delay automatically.

If it bothers you on medium files, raise `ghostmap.loading.tinyLineThreshold` to 200 or more.

## The panel does not appear after install

1. Open any file in a supported language.
2. Look at the left side bar: there should be a new ghost icon.
3. If it does not appear, restart VS Code (`Developer: Reload Window` from the palette).
4. Check that the extension is active: go to `Extensions` and search "GhostMap".

## Report a bug

If the steps above do not solve your problem, write to [getghostmap@proton.me](mailto:getghostmap@proton.me) with the following:

- VS Code version (`Help → About`)
- GhostMap version (Extensions panel)
- Operating system
- Language ID of the affected file
- Line count
- What the header badge shows
- What you expected vs. what happened
- Steps to reproduce
- If possible, the `Output → GhostMap` log with `performanceLogging` enabled

## Next step

If you have a general question instead of a bug, check the **[FAQ](/faq)**.
