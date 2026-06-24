---
id: ghost-description
title: Ghost Description
sidebar_label: Ghost Description
---

# Ghost Description

## Definition

The **description** is the free-text field that documents intent, context, or pending work tied to a symbol or to an anchor.

## Example

```ts
// @ghost description: this method does not handle refresh tokens yet | status: todo
function login() {}
```

Tree result:

```text
login   (todo): this method does not handle refresh tokens yet
```

There is no format constraint on the text. It can be a short sentence, a ticket reference, or a longer architectural note.

## Next step

Continue with **[Anchor](/guide/anchor)** to understand the difference between metadata attached to a symbol and a node with its own identity.
