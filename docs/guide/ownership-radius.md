---
id: ownership-radius
title: Ownership Radius & Ownership Resolution
sidebar_label: Ownership Radius
---

# Ownership Radius & Ownership Resolution

## Definición

Cuando un [Contextual Anchor](/guide/contextual-anchor) no tiene un símbolo en la misma línea, GhostMap busca hacia arriba/abajo dentro de un radio configurable de líneas (`ghostmap.ownershipRadius`, por defecto `5`) y adjunta la metadata al símbolo válido más cercano.

## Posibles resultados (Ownership Resolution)

- **Resolved**: existe un único símbolo cercano → la metadata se adjunta.
- **Detached**: no existe ningún símbolo válido cerca → diagnóstico informativo.
- **Ambiguous**: existen múltiples candidatos igual de cercanos → diagnóstico informativo listando los candidatos.

## Ejemplo

```ts
// @ghost description: mejorar validación | status: todo

function login() {}
```

```text
login   (todo): mejorar validación
```

A pesar de la línea en blanco entre el comentario y la función, GhostMap resuelve la metadata al símbolo `login` porque está dentro del radio configurado.

## Siguiente paso

Continúa con **[Symbol Validity Gate](/guide/symbol-validity-gate)** para entender qué nombres pueden convertirse en nodos del árbol.
