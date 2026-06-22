---
id: semantic-anchor
title: Semantic Anchor
sidebar_label: Semantic Anchor
---

# Semantic Anchor

## Definición

Un **Semantic Anchor** es un Anchor con nombre explícito (`#nombre`).

## Características

- Tiene nombre propio (`#auth`, `#refactor-pagos`, etc.).
- Aparece en el árbol como nodo propio.
- Puede contener otros elementos (si se usa como [Range Anchor](/guide/range-anchor)).
- Puede existir de forma totalmente independiente, sin estar pegado a ningún símbolo de código: por ejemplo, para una nota arquitectónica general.

## Ejemplo

```ts
// @ghost #auth description: validar JWT | status: todo
```

```text
auth          (todo): validar JWT
```

## Siguiente paso

Continúa con **[Contextual Anchor](/guide/contextual-anchor)**.
