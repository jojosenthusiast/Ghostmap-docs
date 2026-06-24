---
id: ownership-radius
title: Ownership Radius & Ownership Resolution
sidebar_label: Ownership Radius
---

# Ownership Radius & Ownership Resolution

## Definition

When a [Contextual Anchor](/guide/contextual-anchor) has no symbol on the same line, GhostMap searches up and down within a configurable line radius (`ghostmap.ownershipRadius`, default `5`) and attaches the metadata to the closest valid symbol.

## Possible results (Ownership Resolution)

- **Resolved**: there is exactly one nearby symbol; the metadata attaches.
- **Detached**: no valid symbol exists nearby; an informational diagnostic is shown.
- **Ambiguous**: several candidates are equally close; an informational diagnostic lists them.

## Example

```ts
// @ghost description: improve validation | status: todo

function login() {}
```

```text
login   (todo): improve validation
```

Even with a blank line between the comment and the function, GhostMap resolves the metadata to `login` because it is inside the configured radius.

## Next step

Continue with **[Symbol Validity Gate](/guide/symbol-validity-gate)** to understand which names can become nodes in the tree.
