---
id: symbol-validity-gate
title: Symbol Validity Gate
sidebar_label: Symbol Validity Gate
---

# Symbol Validity Gate

## Definición

El **Symbol Validity Gate** es un filtro centralizado que decide si un nombre extraído del código puede convertirse en un nodo del árbol. Se aplica en **todas** las rutas de extracción (LSP, tree-sitter, regex fallback, PHP).

## Un nombre se rechaza si

- Tiene menos de 2 caracteres, o es `<anonymous>` / empieza con `<`.
- Es un identificador de 1–2 letras en minúscula (`e`, `cb`, `fn`...).
- Está en la lista de "nombres ruido" (`NOISE_NAMES`): `callback`, `cb`, `fn`, `func`, `handler`, `resolve`, `reject`, `next`, `done`, `err`, `error`, `e`, `evt`, `event`, `res`, `req`, `ctx`, `data`, `item`, `then`, `catch`, `finally`, `body`, `args`, `kwargs`, `params`, `opts`, `options`.
- Es una palabra reservada del lenguaje (lista cross-language: `if`, `class`, `function`, `return`, `async`, `self`, `this`, etc.: más de 100 palabras cubriendo JS/TS, Python, Rust, Go, Java, C#, C/C++, Ruby, SQL, entre otros).

## Por qué importa

Esto explica por qué un callback anónimo (`.then(res => ...)`) o una función `function e() {}` **no** aparecen como nodos en el Ghost Tree. Es intencional, para evitar ruido.

## Ejemplos de código que intencionalmente NO genera nodos

```ts
// ❌ No aparece: nombre de 1-2 caracteres en minúscula
function e() {}

// ❌ No aparece: callback anónimo en .then()
fetchData().then(res => {
  console.log(res);
});

// ❌ No aparece: "data" está en NOISE_NAMES
const data = items.map(item => transform(item));

// ❌ No aparece: "constructor" es palabra reservada / context-sensitive
class Foo {
  constructor() {}
}

// ✅ Sí aparece: nombre descriptivo, no reservado, no ruido
function calculateMonthlyInterest(principal: number) {}
```

> **Nota:**
> Si una función o variable que esperabas ver no aparece en el árbol, probablemente cae en uno de estos casos: no es un error de GhostMap.

## Siguiente paso

Has completado la sección de Conceptos. Continúa con la **[Referencia de sintaxis](/reference/sintaxis)** para ver todas las formas válidas de escribir `@ghost`.
