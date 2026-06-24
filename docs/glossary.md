---
id: glossary
title: Glossary
sidebar_label: Glossary
---

# Glossary

Terms used in the documentation and in the GhostMap UI, defined in one place.

## Anchor

A `@ghost` annotation written inside a line comment. There are three types: [Point](/guide/semantic-anchor) (with `#name`), [Contextual](/guide/contextual-anchor) (no `#name`, attaches to the nearby symbol), and [Range](/guide/range-anchor) (bounded by `start` and `end`).

## Backpressure

GhostMap's scheduler mechanism that delays the start of a refresh by 200 ms when it detects fast tab switches (less than 150 ms between them). It avoids queueing analyses for files the user just passed through. Small files skip it automatically. See [Performance](/reference/performance#tab-switching).

## Coalescer

Progressive scanner component that groups several batch publications into a single tree update every 250 ms. Prevents panel flicker during the analysis of large files.

## Contextual Anchor

Anchor without `#name`. Attaches automatically to the closest symbol within the [ownership radius](/guide/ownership-radius). See [Contextual Anchor](/guide/contextual-anchor).

## Generation

Internal identifier that increments with every refresh request. GhostMap uses the generation to discard work whose result is already obsolete (for example, a refresh of file A when the user has already switched to file B).

## Ghost Comments

Canonical name for the future "invisible" form of anchors in V2. Ghost information will stop living as text in the comment and will be shown via decorations and CodeLens, while the source stays clean. See [Roadmap](/roadmap/v2).

## Ghost Context Graph

Long name for **Ghost Graph**: the graph of relations between files, symbols, and dependencies that will live in the Ghost Index v2.

## Ghost Engine

Canonical name for the symbol-extraction stack. Three layers in order: LSP (language server) then Tree-sitter WASM then regex fallback. See [Performance](/reference/performance#the-ghost-engine).

## Ghost Graph

Short form of "Ghost Context Graph". Visualization of the relations stored in the Ghost Index v2. See [Roadmap](/roadmap/v2).

## Ghost Index

Persistent cache GhostMap keeps per workspace in `.ghostmap/ghostmap.json`. In V1 it is per-document. In V2 it will be per-workspace (Ghost Index v2). See [Local State](/architecture/local-state).

## Ghost Project Index

Synonym for **Ghost Index v2**: the persistent workspace-level index that will replace the per-file cache of V1.

## Ghost Threads

Canonical name for the per-code-block discussions planned for V2 Enterprise. Every function, class, or range can have its own thread, with role assignment and a bridge to Slack.

## Ghost Tree

The tree GhostMap shows in the side panel: classes, interfaces, functions, methods, anchors. Built from the [Ghost Engine](#ghost-engine) output.

## Ghost Watcher

Component planned for V2: filesystem watcher that keeps the [Ghost Index v2](#ghost-index) incrementally up to date on create, delete, rename, or modify.

## Language ID

VS Code's internal identifier for the language of the active file. It appears in the status bar, lower right corner. GhostMap uses it to decide which extraction patterns apply.

## LSP

Language Server Protocol. The spec language servers (TypeScript Server, Pyright, etc.) use to expose code information. GhostMap queries the active language's LSP as the first layer of the Ghost Engine.

## Ownership Radius

Number of lines around a [Contextual Anchor](#contextual-anchor) where GhostMap looks for a symbol to attach the metadata to. Default: 5. Configurable via `ghostmap.ownershipRadius`. See [Ownership Radius](/guide/ownership-radius).

## Point Anchor

Anchor with `#name` but no `start`/`end`. Creates its own node in the tree with its own identity. Also called **Semantic Anchor**. See [Semantic Anchor](/guide/semantic-anchor).

## Progressive Scanner

Extraction engine for large files. Processes the file in 4,000-line batches and publishes the first 50 symbols before finishing. Yields control to the event loop between batches via `setImmediate` so the editor stays responsive. See [Performance](/reference/performance#the-progressive-scanner-large-files).

## Range Anchor

Anchor with `#name start ... end` that bounds a section of code. Creates a node in the tree containing all symbols inside the region. See [Range Anchor](/guide/range-anchor).

## Refresh

Operation that recomputes the tree for the active document. Triggered by a tab switch, a file edit, or the manual `GhostMap: Refresh` command.

## Scheduler

Component that manages the refresh queue. Keeps at most one in-flight and one queued per file. Spam clicks collapse to the "last". See [Architecture](/architecture/v1).

## Semantic Anchor

Another name for [Point Anchor](#point-anchor) (anchor with `#name`). Called "semantic" because it has its own identity and is referenceable as a tree node.

## Snapshot

A [Ghost Index](#ghost-index) entry that captures the extraction state of a file: tree, anchors, content fingerprint, capture timestamp. See [Local State](/architecture/local-state).

## Stale-cache

State in which GhostMap is showing a prior snapshot (badge `[cached]`) while validating or re-extracting the file. If the fingerprint does not match, it switches to `[stale-cache]`. Resolves only when the fresh refresh completes.

## Status badge

Bracketed indicator in the GhostMap panel title: `[loading]`, `[cached]`, `[stale-cache]`, `[skipped]`, `[no items]`, `[deferred]`, `[discarded:...]`. Tells you exactly what state extraction is in.

## Symbol

Class, interface, struct, enum, method, function, constructor, or anchor that shows up as a node in the Ghost Tree. What counts as a Symbol is decided by the [Symbol Validity Gate](/guide/symbol-validity-gate).

## Symbol Validity Gate

Filter that decides which identifiers are accepted as a Symbol. Rejects 1 to 2 letter names, language reserved words, and noisy patterns (`fn`, `cb`, `id`, etc.). See [Symbol Validity Gate](/guide/symbol-validity-gate).

## Watchdog

Mechanism that detects if the tree for the active file has not updated within 1 second after a tab switch, and fires a recovery refresh. Only fires when no refresh is in flight for that generation. See [Performance](/reference/performance#watchdog).

## WASM

WebAssembly. Portable binary format. GhostMap packs 19 Tree-sitter grammars compiled to WASM inside the extension. They are static code with no network capability.

## Next step

Go back to the **[FAQ](/faq)** or to the **[Syntax](/reference/syntax)** for concrete cases.
