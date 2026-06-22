---
id: symbol
title: Symbol
sidebar_label: Symbol
---

# Symbol

## Definición

Un **Symbol** es la unidad semántica extraída del código fuente. Es la base de todo el sistema: GhostMap construye primero el mapa de símbolos del proyecto y luego le aplica la metadata Ghost.

## Tipos de símbolo soportados

GhostMap reconoce: **Class, Function, Method, Interface, Struct, Enum**.

Internamente se agrupan en dos categorías:

- `'function'`: incluye Function, Method y Constructor.
- `'class'`: incluye Class, Interface, Struct y Enum.

## Cómo se extraen

GhostMap intenta, en este orden:

1. **LSP** (`vscode.executeDocumentSymbolProvider`): si el lenguaje tiene un *language server* activo, es la fuente preferida.
2. **Tree-sitter**: gramáticas WASM por lenguaje.
3. **Regex fallback**: patrones por lenguaje cuando no hay LSP ni grammar de tree-sitter disponible (o falla el parseo).
4. **PHP/Blade**: tiene su propio parser regex dedicado.

## Lenguajes soportados

JavaScript, TypeScript, TSX, Python, PHP, Java, C#, Go, Rust, C, C++, Ruby, Dart, Elixir, Groovy, Julia, Objective-C, Scala, Solidity.

## Ejemplo

```ts
// archivo: auth.service.ts
export class AuthService {
  login() { /* ... */ }
  logout() { /* ... */ }
}
```

Resultado (simplificado):

```text
AuthService   (class)
├── login     (function)
└── logout    (function)
```

Nota que este árbol existe **sin ninguna anotación `@ghost`**: es el mapa de símbolos puro. La metadata Ghost se le adjunta encima (ver [Ghost Metadata](/guide/ghost-metadata)).

## Siguiente paso

Continúa con **[Ghost Metadata](/guide/ghost-metadata)** para ver cómo se adjunta información a estos símbolos.
