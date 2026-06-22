---
id: sintaxis
title: 'Sintaxis: anotaciones @ghost'
sidebar_label: Sintaxis
---

# Sintaxis: anotaciones `@ghost`

Hay tres formas válidas de escribir una anotación `@ghost`. Las tres usan la misma gramática base; lo que cambia es la presencia de `#nombre` y de `start`/`end`.

## 4.1 Point Anchor (con nombre)

```ts
// @ghost #nombre description: ... | status: ...
```

```python
# @ghost #nombre description: ... | status: ...
```

Crea un nodo propio en el árbol con identidad (`#nombre`). Ver [Semantic Anchor](/guide/semantic-anchor).

## 4.2 Contextual Anchor (sin nombre)

```ts
// @ghost description: ... | status: ...
```

```python
# @ghost description: ... | status: ...
```

No crea un nodo propio: se adjunta al símbolo más cercano dentro del [radio de ownership](/guide/ownership-radius). Ver [Contextual Anchor](/guide/contextual-anchor).

## 4.3 Range Anchor

```ts
// @ghost #nombre start description: ... | status: ...

...código...

// @ghost end
```

```python
# @ghost #nombre start description: ... | status: ...

...código...

# @ghost end
```

Agrupa una sección completa de código bajo un nodo. Ver [Range Anchor](/guide/range-anchor).

## 4.4 Snippets disponibles

GhostMap incluye snippets para crear cada tipo de anotación rápidamente:

| Prefijo | Lenguajes | Resultado |
|---|---|---|
| `gh`  | JS/TS/TSX/C/C++/Java/Go/PHP/C#/Rust/Kotlin/Swift/Scala/Groovy/Solidity (comentario `//`) | Point Anchor con nombre |
| `gw`  | mismos | Contextual Anchor |
| `gr`  | mismos | Range Anchor |
| `gl`  | Python/Ruby/Elixir/Shell (comentario `#`) | Point Anchor con nombre |
| `gxl` | mismos | Contextual Anchor |
| `gxr` | mismos | Range Anchor |

### Autocompletado contextual inteligente

Escribir `gh` seguido de **Tab** directamente sobre una línea vacía activa un autocompletado que decide el tipo de anotación según el contexto:

- Si hay un símbolo cercano dentro del radio de ownership → sugiere `// @ghost <nombreSimbolo> description: ... | status: todo` (Contextual).
- Si no hay símbolo cercano → sugiere `// @ghost #name description: ... | status: todo` (Semantic).
- Si hay **varios** candidatos igual de cercanos → sugiere primero el más cercano como contextual, luego ofrece la opción semántica (para evitar ambigüedad) y una opción contextual por cada candidato adicional.

> **Nota:**
> El autocompletado solo sugiere símbolos definidos **más abajo** en el archivo, dentro del rango de ownership configurado.

## 4.5 Reglas gramaticales y errores comunes

- La línea debe empezar (ignorando espacios) con el prefijo de comentario del lenguaje (`//` o `#`), y debe haber un espacio después: `// @ghost ...` es válido, `//@ghost ...` **no** lo es.
- Después de `@ghost ` debe venir una de estas formas:
  - `#nombre ...`
  - `end`
  - `start ...`
  - `description: ...`
  - `status: ...`
- Cualquier otra palabra suelta después de `@ghost` (por ejemplo `// @ghost revisar_pagos`) se considera **sintaxis híbrida malformada** y genera un diagnóstico de advertencia con dos quick fixes:
  1. Convertir a Semantic Anchor → `// @ghost #revisar_pagos`
  2. Convertir a Contextual Anchor → `// @ghost description: revisar_pagos`

### Solo comentarios de línea

En V1, un Anchor solo es válido si está escrito como **comentario de línea**: `// @ghost ...` o `# @ghost ...`.

Comentarios de bloque o JSDoc (`/* @ghost ... */`, `/** @ghost ... */`) **no son evidencia válida de anchor en V1** y son ignorados por el parser. Si un `@ghost` dentro de un bloque `/** ... */` no aparece en el árbol, este es el comportamiento esperado: el soporte para comentarios de bloque podría llegar en una versión futura.

## Siguiente paso

Continúa con **[Ghost Tree](/reference/ghost-tree)** para ver cómo se construye la jerarquía y qué comandos están disponibles en VS Code.
