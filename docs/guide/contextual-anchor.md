---
id: contextual-anchor
title: Contextual Anchor
sidebar_label: Contextual Anchor
---

# Contextual Anchor

## Definition

A **Contextual Anchor** is a `@ghost` annotation **without** `#name`. It has no identity of its own: GhostMap looks for the closest symbol within the [ownership radius](/guide/ownership-radius) and attaches the `description`/`status` to it.

## Example

```ts
// @ghost description: review error handling | status: review
function processPayment() {}
```

```text
processPayment   (review): review error handling
```

## When to use it

Use a Contextual Anchor when the note is about **the symbol immediately below** and you do not need to reference it by name from elsewhere. If you want a note with its own identity (for example to group several symbols, or for a general file-level observation), use a [Semantic Anchor](/guide/semantic-anchor).

## Next step

Continue with **[Range Anchor](/guide/range-anchor)** to group whole code sections.
