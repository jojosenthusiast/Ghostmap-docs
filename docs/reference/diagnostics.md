---
id: diagnostics
title: Ghost Diagnostics
sidebar_label: Diagnostics
---

# Ghost Diagnostics

GhostMap shows warnings and information directly in the editor when it detects malformed or ambiguous annotations.

## Diagnostics table

| Code | Severity | When it appears |
|---|---|---|
| `ghost-unclosed-range` | Warning | A `@ghost #name start` never received its matching `@ghost end`. It degrades to a Point Anchor (does not drag later symbols as children). |
| `ghost-unexpected-end` | Warning | A `@ghost end` exists with no opening (`start`) before it. |
| `ghost-malformed-syntax` | Warning | Unrecognized hybrid syntax after `@ghost` (see [Grammar rules](/reference/syntax#45-grammar-rules-and-common-errors)). Includes a suggestion for the two matching quick fixes. |
| `ghost-detached-symbol` | Information | A Contextual Anchor found no symbol inside the ownership radius. |
| `ghost-ambiguous-ownership` | Information | A Contextual Anchor has several candidates equally close; their names are listed. |

## Available Code Actions

- **"Add @ghost annotation"**: on a `function`/`class` line with no previous annotation, inserts `// @ghost description:  | status: todo` just above it.
- **"Convert to semantic anchor: @ghost #token"** / **"Convert to contextual anchor: @ghost description: ..."**: on malformed hybrid syntax.
- **Misspelled-key fix** (`statu:` to `status:`) when the key contains "stat"/"statu" but is not exactly `status` or `description`.
- **Invalid status value fix**: suggests the closest supported status (by prefix) or `todo`.
- **"Add #anchor name"**: on a `@ghost` line without `#`, `start`, or `end` that is not the closest anchor to any symbol, suggests adding `#name`.

## Next step

Continue with **[Settings](/reference/settings)** to tune GhostMap's behavior for your project.
