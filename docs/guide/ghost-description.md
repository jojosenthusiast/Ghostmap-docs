---
id: ghost-description
title: Ghost Description
sidebar_label: Ghost Description
---

# Ghost Description

## Definición

La **description** es el texto libre que documenta intención, contexto o trabajo pendiente, asociado a un símbolo o a un anchor.

## Ejemplo

```ts
// @ghost description: este método no maneja refresh tokens todavía | status: todo
function login() {}
```

Resultado en el árbol:

```text
login   (todo): este método no maneja refresh tokens todavía
```

No hay límite de formato sobre el texto: puede ser una frase corta, una referencia a un ticket, o una nota arquitectónica más larga.

## Siguiente paso

Continúa con **[Anchor](/guide/anchor)** para entender la diferencia entre metadata pegada a un símbolo y un nodo con identidad propia.
