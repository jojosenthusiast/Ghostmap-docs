---
id: ghost-tree
title: Ghost Tree
sidebar_label: Ghost Tree
---

# Ghost Tree

## How the hierarchy is built

The tree is built by **range containment**, not by composed names.

**Containment rule:** node A is the parent of B if `A.start <= B.start` and `A.end > B.start`. That is, B "is born" inside A's range, even if its body extends further.

## Example combining symbols and anchors

```ts
// @ghost #payments start description: payments module v2 | status: in-progress

class PaymentService {

  // @ghost description: handle timeouts | status: todo
  charge() {}

  refund() {}
}

// @ghost end
```

```text
payments              (in-progress): payments module v2
└── PaymentService
    ├── charge        (todo): handle timeouts
    └── refund
```

## VS Code view

The "GhostMap" side panel shows the tree with icons per node type:

- Function / Method / Constructor: method icon (blue).
- Class / Interface / Struct / Enum: class icon (purple).
- Anchor: bookmark icon (green).
- Context node (visible only because a child matches an active filter or search): dimmed icon with a `(context)` label.

Clicking a node navigates directly to the matching line and briefly highlights the range.

## Commands and toolbar

| Button / Command | Label | Notes |
|---|---|---|
| Refresh the tree | `Refresh` | Re-runs the pipeline for the active document (subject to [Loading Policy](/architecture/loading-policy)). |
| Filter | `Filter` | Opens the type or status filter menu. |
| Reset filters | `Reset` | Clears the active type, status, and search. |
| Search | `Search` | Opens the free search input (name or description). |

All commands appear in the VS Code command palette grouped under the **GhostMap** category (for example, "GhostMap: Refresh", "GhostMap: Filter").

## Filters and search

- **Type filter:** `function` / `class` / `anchor` / All.
- **Status filter:** a dynamic list of the statuses present in the project, with counts (`todo (5)`, `in-progress (2)`, etc.). The last status filter used is remembered across sessions.
- **Free search:** filters by name or by `description` content (case-insensitive).
- **Bubble visibility:** if a child matches the filter or search, its parent(s) stay visible (marked as "context") even if they do not match on their own. The location of the result is never lost inside the tree.

## Next step

Continue with **[Diagnostics](/reference/diagnostics)** to see the warnings GhostMap can show and how to fix them.
