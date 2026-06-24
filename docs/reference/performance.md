---
id: performance
title: Performance
sidebar_label: Performance
---

# Performance

This page documents the system's real numbers in V1, how it behaves under different conditions, and what levers you have to tune it.

## The Ghost Engine

The **Ghost Engine** is the symbol-extraction stack. It runs in three steps in preference order:

```
LSP (language server)
  → if unavailable or slow (> 800 ms): Tree-sitter WASM
    → if no grammar is available: regex fallback
```

Each layer is faster and less precise than the previous one. In most cases LSP gives the best result. On small files with LSP active, the Ghost Engine short-circuits and skips Tree-sitter and regex completely (saves up to 1.2 s of WASM load).

## Reference numbers

| Scenario | Time |
|---|---|
| Open from Ghost Index (valid snapshot) | **< 50 ms** |
| Small file (< 500 lines) with LSP active | **200 to 600 ms** |
| 60k-line file, progressive scanner | **~33 ms** of pure scan |
| LSP cold start under normal conditions | **800 ms to 3 s** |
| LSP cold start under RAM pressure (80 to 90 percent) | **5 to 35 s** (GhostMap does not wait: it falls back at 800 ms) |

> **Ghost Index is the key:**
> The most common scenario after the first open is always the first one: < 50 ms from snapshot. The first open of a file pays the extraction cost; every later open does not.

## The progressive scanner (large files)

For files of 50,000 lines or more, GhostMap uses a regex-based scanner that yields control to the VS Code event loop between batches: the editor does not freeze while it analyzes.

- Batch size: 4,000 lines per iteration.
- The first 50 symbols are published to the tree before the full analysis finishes. The tree appears quickly and fills in.
- The in-progress tree updates every 250 ms (publish coalescer), not on every symbol found. This avoids panel flicker.

**Measured on a C++ 60k-line file:** pure scan of ~33 ms of effective CPU time (vs ~19.5 s before the `setTimeout` overhead was removed).

## Behavior under RAM pressure

With the system at 80 to 90 percent RAM in use:

- The language server can take 5 to 30 s to respond. GhostMap has an **800 ms** timeout: if the LSP does not answer, it drops to Tree-sitter + regex and publishes the tree without waiting.
- The **status badge** in the panel header shows `[loading]`, `[cached]`, `[stale-cache]`, or `[discarded:...]` so you can see exactly what is happening without opening the console.
- The **Ghost Index** mitigates the problem: if the file was analyzed before, the tree loads from the snapshot in < 50 ms without touching the LSP.

## Tab switching

Switching files quickly (< 150 ms between switches) triggers a backpressure mechanism:

- GhostMap waits 200 ms before starting the refresh of the destination file.
- Files of 50 lines or fewer (`ghostmap.loading.tinyLineThreshold`) ignore this delay. They appear instantly.
- If the user keeps switching tabs during the delay, only the last destination is processed. The intermediate ones are dropped.

This prevents opening 10 tabs in a row from queuing 10 full analyses.

## Watchdog

If the tree does not update within 1 second after a file switch, GhostMap's watchdog detects the state and fires a recovery refresh, but only if a refresh is not already in flight for that file. This prevents double LSP calls under stress.

## Limits and how to tune them

All performance limits are configurable. The full table is in [Settings](/reference/settings); the most relevant ones:

| Setting | Default | When to adjust |
|---|---|---|
| `ghostmap.loading.maxAutoLines` | `60000` | If you regularly work with files larger than 60k lines. |
| `ghostmap.loading.maxAutoBytes` | `10000000` (10 MB) | If you have very heavy generated files. |
| `ghostmap.loading.tinyLineThreshold` | `50` | Raise to 200+ if you want more files to skip backpressure. |
| `ghostmap.loading.allowManualLargeFileRefresh` | `false` | Turn on if you want manual refresh on large files. |
| `ghostmap.backgroundIndex.enabled` | `false` | Turn on if you have RAM to spare and want open tabs pre-indexed on idle. |

## Observability

If something feels slow and you want to understand why, turn on structured logging:

```json
"ghostmap.performanceLogging": true
```

Events go to `Output → GhostMap` in VS Code: per-refresh timings, progressive scanner batches, LSP warm-up, watchdog recoveries, and more.

Combine with the status badge in the panel header for a complete picture without opening the console.
