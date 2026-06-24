---
id: symbol-validity-gate
title: Symbol Validity Gate
sidebar_label: Symbol Validity Gate
---

# Symbol Validity Gate

## Definition

The **Symbol Validity Gate** is a centralized filter that decides whether a name extracted from code can become a node in the tree. It applies on **every** extraction path (LSP, Tree-sitter, regex fallback, PHP).

## A name is rejected if

- It has fewer than 2 characters, or it is `<anonymous>` / starts with `<`.
- It is a 1 to 2 letter lowercase identifier (`e`, `cb`, `fn`, etc.).
- It is in the "noise names" list (`NOISE_NAMES`): `callback`, `cb`, `fn`, `func`, `handler`, `resolve`, `reject`, `next`, `done`, `err`, `error`, `e`, `evt`, `event`, `res`, `req`, `ctx`, `data`, `item`, `then`, `catch`, `finally`, `body`, `args`, `kwargs`, `params`, `opts`, `options`.
- It is a reserved word of the language (a cross-language list of more than 100 words covering JS/TS, Python, Rust, Go, Java, C#, C/C++, Ruby, SQL, and others).

## Why it matters

This explains why an anonymous callback (`.then(res => ...)`) or a function `function e() {}` **does not** appear as a node in the Ghost Tree. It is intentional, to avoid noise.

## Examples of code that intentionally does NOT create nodes

```ts
// Does not appear: 1 to 2 character lowercase name
function e() {}

// Does not appear: anonymous callback in .then()
fetchData().then(res => {
  console.log(res);
});

// Does not appear: "data" is in NOISE_NAMES
const data = items.map(item => transform(item));

// Does not appear: "constructor" is reserved / context-sensitive
class Foo {
  constructor() {}
}

// Does appear: descriptive name, not reserved, not noise
function calculateMonthlyInterest(principal: number) {}
```

> **Note:**
> If a function or variable you expected to see is missing from the tree, it probably falls in one of these cases. It is not a GhostMap bug.

## Next step

You have finished the Guide section. Continue with the **[Syntax reference](/reference/syntax)** to see every valid form of `@ghost`.
