---
id: disclaimer
title: Disclaimer
sidebar_label: Disclaimer
---

# Disclaimer

**Effective date:** June 18, 2026 · **Version:** 1.0

> **Important:**
> GhostMap is currently in pre-release. Some features described in this documentation are best-effort. Read this page before relying on GhostMap output for critical work.

## Pre-release software

GhostMap is currently in the V1 series of releases. The published version number is **0.5.0**, which under semver signals "feature-complete pre-1.0". The public API surface (settings, command names, persistence schema) is intended to stay stable through V1, but small changes are still possible until a 1.0 ships.

## "Best-effort" languages

The Ghost Engine supports 19 languages across three quality tiers:

- **Tier 1 (first-class)** - extraction and nesting both work end to end.
- **Tier 2 (best-effort)** - extraction works; nesting may be partial. Currently: Go, Groovy, Objective-C.
- **Tier 3 (top-level only)** - top-level symbol extraction works; deeper structure is unreliable due to language grammar features that a regex/Tree-sitter pipeline cannot reasonably capture without a real language frontend. Currently: Scala, Solidity, Julia, Elixir.

If your project is primarily in a Tier 3 language, treat the Ghost Tree as a coarse top-level index, not a structural tree.

## Known gaps

Even on Tier 1 languages, the following are known not to work today:

- **C++ `const` detection** - top-level `const` declarations are not currently extracted.
- **Go method-to-receiver nesting** - methods are extracted, but they do not nest under the receiver type they belong to.
- **Java bare-name constructors** - `public Service(args)` without a return type slot can be missed.
- **Java multi-method-per-line** - two method bodies on the same line nest as siblings instead of in sequence.
- **Objective-C nested-struct hierarchy** - a `struct` declared at module scope between two `@implementation` blocks can attach to the wrong parent.
- **Groovy comment backtrack** - trailing comments after a method body can be absorbed into the previous block's range.
- **SQL `--` anchor style** - `--` line comments are not currently parsed for `@ghost` anchors.

These are tracked for resolution in upcoming rounds.

## Language pack expansion (separate workstream)

Roughly 20 additional languages (Kotlin, Swift, Haskell, OCaml, Clojure, Lua, R, Bash, the SQL family, …) are on the roadmap but **not supported today**. The expansion is gated on a set of validation and packaging risks surfaced by prior audits of the existing 19-grammar bundle:

- **Dart WASM load failure risk**: the Dart grammar has been observed to fail to load on some Electron/Node combinations and silently fall back to regex.
- **Invalid Elixir / Objective-C queries**: existing query files reference nodes the upstream grammars do not always expose; new queries we ship must be validated against the grammar version we bundle.
- **Weak Julia coverage**: many definition shapes (macros, `@inline`-emitted defs) are not extracted; new similar-shape languages need a fixture set proving the shapes we claim to cover.
- **Duplicate symbol issues**: some grammar packs expose colliding WASM symbol names that mis-load at runtime without a duplicate-symbol guard.
- **Non-reproducible WASM provenance**: today's WASMs are checked-in artifacts; the expansion needs a reproducible build job before adding more.
- **Fallback masking broken grammars**: the LSP → Tree-sitter → regex chain hides grammar regressions; the expansion needs a per-grammar load + sample-query smoke that fails loudly.

Until a candidate language passes all of those gates (and gets a fixture row in the matrix tests), it does not appear in [Requirements](/get-started/requirements) or the language sections of the marketing site.

## "Navigational aid" framing

The Ghost Tree is a fast, opinionated navigational view of your code. It is **not** a complete semantic model of your program. Do not use it as the sole source of truth for:

- Refactoring decisions that depend on call-graph correctness.
- Compliance, audit, or regulated-quality reviews.
- Security-critical analysis.
- Any task where missing a symbol would cause material harm.

The Ghost Tree's job is to make navigation faster. The compiler, the language server, and your tests are the sources of truth for correctness.

## Anchor diagnostics

The `@ghost` diagnostic system catches the most common annotation mistakes (unclosed range, detached anchor, invalid status, malformed syntax) but does not check semantic correctness of the description or status text. An anchor that says `status: done` will be treated as done even if the surrounding code was never finished.

## Performance under stress

GhostMap is engineered to stay responsive on files up to 60,000 lines and under most levels of system load. Under extreme RAM pressure (80-90% used), language servers can become slow and the Ghost Engine will fall back to the regex layer. In those conditions, the Ghost Tree may render with reduced precision; the status badge in the panel header tells you when this happens.

## Liability

The full disclaimer of warranty and limitation of liability is in the GhostMap Terms of Use, included with the source repository as `LICENSE` (further questions: getghostmap@proton.me). GhostMap is provided as-is under the GhostMap Free Non-Commercial License.

## Reporting an issue

If you encounter a behavior that contradicts this documentation, write to [getghostmap@proton.me](mailto:getghostmap@proton.me) so the docs can be updated or the bug fixed. Legal, licensing, and privacy correspondence go to the same address.
