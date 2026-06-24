---
id: semantic-anchor
title: Semantic Anchor
sidebar_label: Semantic Anchor
---

# Semantic Anchor

## Definition

A **Semantic Anchor** is an Anchor with an explicit name (`#name`).

## Properties

- It has its own name (`#auth`, `#refactor-payments`, etc.).
- It appears in the tree as its own node.
- It can contain other items (when used as a [Range Anchor](/guide/range-anchor)).
- It can exist fully independent of any code symbol, for example as a general architectural note.

## Example

```ts
// @ghost #auth description: validate jwt | status: todo
```

```text
auth          (todo): validate jwt
```

## Next step

Continue with **[Contextual Anchor](/guide/contextual-anchor)**.
