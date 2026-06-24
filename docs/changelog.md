---
id: changelog
title: Changelog
sidebar_label: Changelog
---

# Changelog

Every user-visible fix and feature in GhostMap is logged here with the reasoning behind it. This is the product changelog; the round-by-round internal log lives alongside the extension source.

Public history starts at `0.5.0`, the first version stamp shipped outside the maintainers. Earlier work was internal stabilization and is summarized below.

## 0.5.0 - June 18, 2026

The first version stamp after multiple rounds of stabilization. Marks GhostMap as feature-complete pre-1.0: the Ghost Tree, the Ghost Engine, the Ghost Index, anchors, diagnostics, and status badges all behave as documented.

### Added

- **Status badges in the Ghost Tree header**: the panel title now shows `[loading]`, `[cached]`, `[stale-cache]`, `[skipped]`, `[no items]`, or `[discarded:...]` so you can see exactly what the engine is doing without opening the console.
- **Snippet coverage widened to 20 language IDs**: the `gh` / `gw` / `gr` / `gl` / `gxl` / `gxr` prefixes are now available in JavaScript, TypeScript, JSX, TSX, C, C++, C#, Java, Go, Rust, PHP, Kotlin, Swift, Scala, Groovy, Solidity, Python, Ruby, Elixir, and Shell. Snippet availability does not imply Ghost Tree symbol extraction support.

### Fixed (round 6)

- **C# constructors and `var` fields**: K&R and Allman constructors now appear in the Ghost Tree. Class-level `var` fields are detected; local `var` inside method bodies remains suppressed.
- **PHP method recognition in large files**: a day-1 regex asymmetry where `public function foo()` required `publicfunction foo()` to match was fixed. Whitespace is now consumed uniformly across all access modifiers.
- **Setloading restored**: a previous round removed what looked like a redundant call; it wasn't. Stale-cached trees no longer appear as "complete" while a refresh is running.
- **Removed the background fingerprint validator**: an earlier attempt used synchronous file I/O on the Extension Host main thread, causing 2 to 10 second freezes under RAM pressure. The optimistic-trust path plus the lazy mismatch detection remains.

### Fixed (round 5)

- **Live scanner references**: parent class arrows were missing in 60k-line C# and Java files because the scanner mutated item ranges while callers held stale clones. The scanner now exposes live references.
- **Trailing comment backtrack**: comments between two methods were being absorbed into the previous block's range. Fixed for Python, Ruby, Julia, and Elixir.
- **`const` and `let` arrow functions**: `const fetch = () => {}` was invisible in JavaScript / TypeScript / TSX. Now extracted via a dedicated pattern.
- **Multi-line string state**: PHP heredocs, JavaScript template literals, and Java text blocks are now tracked across lines. Braces inside strings no longer desync the frame stack.
- **Tab-switch race condition**: a slow language server no longer pays the full 800 ms timeout after the user switches tabs. The wait polls every 50 ms and aborts immediately.
- **Cold-start fast path (Ghost Index)**: persisted snapshots now load as trusted on activate. First open of a known file paints in under 50 ms instead of 5 to 35 seconds.
- **LSP timeout reduced**: 1500 ms to 800 ms, which halves the cold-LSP stall on first open.
- **Small-file fast path**: files under 500 lines with an active language server skip Tree-sitter and regex entirely, saving up to 1.2 seconds of WASM load.
- **Tiny file bypass**: files under 50 lines skip the 200 ms tab-spam backpressure window.
- **Lazy LSP warm-up**: GhostMap pre-warms the active language server on activate, then staggers warm-ups for other visible editors after 2 seconds of idle.

### Fixed (round 4)

- **Allman brace support** for C#, Java, C++, C, and Go: methods with the opening brace on a separate line now nest correctly.
- **Multi-line method signatures** for TypeScript and Java: methods with arguments spread across multiple lines are detected.
- **Indent-based language nesting** for Python, Ruby, Julia, and Elixir: a dedicated indent-stack tracker now produces nested trees instead of flat lists.
- **Pending body FIFO queue**: two declarations queued before a `{` no longer overwrite each other.
- **Anonymous frame guard**: object-literal methods are no longer treated as anchors.

### Tests

- 166 passing unit and matrix tests, 6 passing smoke scripts.
- Compile clean.

## Pre-0.5.0: v1-coalesce-publish series

- **Publish coalescer**: 87% fewer TreeView event fires during a 60k-line progressive scan.
- **Progressive scanner**: regex-based scanner for large files, batch-yielding via `setImmediate` to keep the editor responsive. C++ 60k scan: from ~19.5 s to ~33 ms.
- **Resumable scan**: mid-scan tab switches no longer discard minutes of partial work.
- **SHA-256 cache fast path**: tab switch to a warm-cached file skips fingerprinting entirely.
- **Local state persistence**: the `.ghostmap/ghostmap.json` snapshot file was introduced.

## Pre-V1 baseline

- Initial GhostMap activation, Ghost Tree view, and `@ghost` parser.
- Safety-layer hardening: single-lane foreground, tab-spam backpressure, watchdog scheduling.

## Next steps

For known limitations of the current release, see the [Disclaimer](/legal/disclaimer).
