---
id: contextual-anchor
title: Contextual Anchor
sidebar_label: Contextual Anchor
---

# Contextual Anchor

## Definición

Un **Contextual Anchor** es una anotación `@ghost` **sin** `#nombre`. No tiene identidad propia: GhostMap busca el símbolo más cercano dentro del [radio de ownership](/guide/ownership-radius) y le adjunta la `description`/`status`.

## Ejemplo

```ts
// @ghost description: revisar manejo de errores | status: review
function processPayment() {}
```

```text
processPayment   (review): revisar manejo de errores
```

## Cuándo usarlo

Usa un Contextual Anchor cuando la nota es sobre **el símbolo que sigue inmediatamente** y no necesitas referenciarla por nombre desde otro lugar. Si quieres una nota con identidad propia (por ejemplo, para agrupar varios símbolos o para una observación general del archivo), usa un [Semantic Anchor](/guide/semantic-anchor).

## Siguiente paso

Continúa con **[Range Anchor](/guide/range-anchor)** para agrupar secciones completas de código.
