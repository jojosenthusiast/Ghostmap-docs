---
id: settings
title: Settings
sidebar_label: Settings
---

# Settings

GhostMap runs on sensible defaults. You can adjust any of these settings from `settings.json` or from the VS Code Settings UI (search for "GhostMap").

## `@ghost` annotation behavior

### `ghostmap.ownershipRadius`

- **Default**: `5`
- **Range**: `1` to `20`
- Number of lines around a `@ghost` annotation in which GhostMap looks for a nearby symbol to attach the description and status. Also used in the `detached` and `ambiguous` diagnostics and in the contextual `gh`+Tab completion.
- Raise it if you write long comments before a function. Lower it if anchors latch onto the wrong symbol.
- See [Ownership Radius](/guide/ownership-radius).

### `ghostmap.statusColors`

- **Default**: a map of `done`, `complete`, `completed`, `todo`, `pending`, `in-progress`, `progress`, `review`, `testing`, `blocked`, `error`, `critical` to the active theme's chart colors (green, yellow, blue, purple, red).
- Lets you add or redefine the color of any custom status. Keys not in the map render without color override.

```json
"ghostmap.statusColors": {
  "todo": "charts.yellow",
  "spike": "charts.purple"
}
```

## Loading policy (file budget)

### `ghostmap.loading.maxAutoLines`

- **Default**: `60000`
- **Minimum**: `100`
- Per-file line cap for the automatic refresh. Larger files are flagged as `skipped` to keep the editor responsive. GhostMap's progressive scanner evaluates one regex per line per pattern, so the cost grows linearly.
- Raise it if you regularly work with generated files of 100k+ lines and your machine can take it.
- See [Loading Policy](/architecture/loading-policy).

### `ghostmap.loading.maxAutoBytes`

- **Default**: `10000000` (10 MB)
- **Minimum**: `1024`
- Per-file byte cap for the automatic refresh. Covers the case where a file is not huge in lines but is huge in bytes (minified JS, large JSON). The SHA-256 fingerprint of a multi-MB file alone takes hundreds of milliseconds.

### `ghostmap.loading.tinyLineThreshold`

- **Default**: `50`
- **Range**: `0` to `500`
- Files with this many lines or fewer skip the 200 ms backpressure window for fast tab switches (they appear instantly in the tree) and are also evaluated to detect if they are empty or whitespace-only.
- Raise to 200+ if you want more small files to skip backpressure (tradeoff: less coalescing across rapid consecutive switches).

### `ghostmap.loading.allowManualLargeFileRefresh`

- **Default**: `false`
- When `true`, the manual command **GhostMap: Refresh** ignores `maxAutoLines` and `maxAutoBytes`. Useful for occasionally inspecting a generated file without raising the global budget.

## Background indexing

### `ghostmap.backgroundIndex.enabled`

- **Default**: `false`
- Turns on a queue that opportunistically scans visible and open files during idle moments. Concurrency is fixed at 1 and the queue is capped at 128 entries.
- Off by default because on memory-pressured machines it can compete with the active language server. Turn it on if you have RAM and CPU to spare and want tabs you switch to be warm.

## Observability

### `ghostmap.performanceLogging`

- **Default**: `false`
- Enables structured logging of activation and refresh events in the Extension Host console. Events go to `Output → GhostMap`: timings per refresh, progressive scanner batches, LSP warm-up, watchdog recoveries, background queue events, and more.
- Intended for occasional debugging when something feels slow. Combine with the status badge in the panel header for a full picture.

```json
"ghostmap.performanceLogging": true
```

## Contributed commands

| Command (Command Palette) | What it does |
|---|---|
| `GhostMap: Refresh` | Forces a recompute of the active document. With `allowManualLargeFileRefresh: true` it can bypass the size limits. |
| `GhostMap: Filter` | Filters the tree by status (or by type). |
| `GhostMap: Search` | Filters the tree by name/description substring. |
| `GhostMap: Reset` | Clears active filters and search. |

All commands also appear on the **GhostMap** panel toolbar.

## Next step

If you want to understand how the pipeline works under the hood, continue with **[Architecture v1](/architecture/v1)**.
