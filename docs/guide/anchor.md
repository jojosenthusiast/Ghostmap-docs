---
id: anchor
title: Anchor
sidebar_label: Anchor
---

# Anchor

## Definition

An **Anchor** is an explicit entity the user creates with `#name`. Unlike contextual metadata, **it has its own identity** and appears as an independent node in the tree, without being attached to a language symbol.

## Example

```ts
// @ghost #authentication description: jwt validation | status: todo
```

This produces an `authentication` node in the tree, which can itself contain other symbols or anchors if used as a range.

## The three Anchor types

An Anchor takes three forms, depending on how it is written:

| Type | Has name (`#`) | Creates own node | Page |
|---|---|---|---|
| **Semantic Anchor** | Yes | Yes | [Semantic Anchor](/guide/semantic-anchor) |
| **Contextual Anchor** | No | No (attaches to the closest symbol) | [Contextual Anchor](/guide/contextual-anchor) |
| **Range Anchor** | Yes, with `start`/`end` | Yes, and groups other nodes | [Range Anchor](/guide/range-anchor) |

## Next step

Continue with **[Semantic Anchor](/guide/semantic-anchor)**.
