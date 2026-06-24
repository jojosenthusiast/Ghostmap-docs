---
id: symbol
title: Symbol
sidebar_label: Symbol
---

# Symbol

## Definition

A **Symbol** is the semantic unit extracted from source code. It is the base of the whole system: GhostMap first builds the project's symbol map and then layers Ghost metadata on top.

## Supported symbol types

GhostMap recognizes **Class, Function, Method, Interface, Struct, and Enum**.

Internally they group into two categories:

- `'function'`: includes Function, Method, and Constructor.
- `'class'`: includes Class, Interface, Struct, and Enum.

## How they are extracted

GhostMap tries, in this order:

1. **LSP** (`vscode.executeDocumentSymbolProvider`): if the language has an active language server, it is the preferred source.
2. **Tree-sitter**: per-language WASM grammars.
3. **Regex fallback**: per-language patterns when no LSP or Tree-sitter grammar is available (or when parsing fails).
4. **PHP/Blade**: has its own dedicated regex parser.

## Supported languages

JavaScript, TypeScript, TSX, Python, PHP, Java, C#, Go, Rust, C, C++, Ruby, Dart, Elixir, Groovy, Julia, Objective-C, Scala, Solidity.

## Example

```ts
// file: auth.service.ts
export class AuthService {
  login() { /* ... */ }
  logout() { /* ... */ }
}
```

Result (simplified):

```text
AuthService   (class)
├── login     (function)
└── logout    (function)
```

This tree exists **without any `@ghost` annotation**. It is the pure symbol map. Ghost metadata attaches on top of it (see [Ghost Metadata](/guide/ghost-metadata)).

## Next step

Continue with **[Ghost Metadata](/guide/ghost-metadata)** to see how information attaches to these symbols.
