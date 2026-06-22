---
id: ghost-metadata
title: Ghost Metadata
sidebar_label: Ghost Metadata
---

# Ghost Metadata

## Definición

**Ghost Metadata** es la información asociada a un símbolo. Contiene `description`, `status` y, potencialmente, atributos futuros.

## Punto clave

Un comentario `@ghost` **sin nombre** (`#nombre`) **no crea un nodo propio en el árbol**. Es pura metadata que se "pega" al símbolo más cercano.

## Ejemplo

```ts
// @ghost description: validar tokens JWT | status: todo
function login() {}
```

Resultado en el árbol:

```text
login          (todo): validar tokens JWT
```

**No** se genera un nodo independiente llamado `login` más un nodo Ghost separado. La metadata vive *dentro* del nodo `login`.

## Siguiente paso

Continúa con **[Ghost Status](/guide/ghost-status)** para ver los valores soportados y cómo se normalizan.
