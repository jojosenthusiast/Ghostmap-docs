---
id: ghost-metadata
title: Ghost Metadata
sidebar_label: Ghost Metadata
---

# Ghost Metadata

## Definition

**Ghost Metadata** is information attached to a symbol. It carries `description`, `status`, and potentially future attributes.

## Key point

A `@ghost` comment **without a name** (`#name`) **does not create its own node in the tree**. It is pure metadata that attaches to the closest symbol.

## Example

```ts
// @ghost description: validate jwt tokens | status: todo
function login() {}
```

Tree result:

```text
login          (todo): validate jwt tokens
```

It does **not** produce a separate `login` node plus a separate Ghost node. The metadata lives *inside* the `login` node.

## Next step

Continue with **[Ghost Status](/guide/ghost-status)** to see supported values and how they are normalized.
