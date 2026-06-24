---
id: philosophy
title: GhostMap philosophy
sidebar_label: Philosophy
---

# GhostMap philosophy

## Code-first

Planning lives next to the code, not in an external tool. A Ghost is not a ticket that lives somewhere else and must be synced by hand. It is an annotation that sits physically in the file it describes.

## A minimal, language-agnostic grammar

`@ghost` is readable by humans, by tools, and by AI models. It does not matter if your project is TypeScript, Python, or Rust. The syntax is the same. Only the comment prefix changes (`//` or `#`).

## The right order: symbols first, Ghosts after

It is easy to think of GhostMap as "a Ghost system with some code attached". It is the other way around:

```text
Code
  ↓
Symbols  (Class, Function, Method, Interface, Struct, Enum)
  ↓
Ghost metadata (description, status)
  ↓
Tree (Ghost Tree)
```

First there is a map of **symbols** for the project (extracted from real code, with or without annotations). Then the Ghost metadata attaches to those symbols. That is what lets GhostMap understand the structure of your project before you annotate anything.

## Design principles

1. **Code first**: code is the source of truth.
2. **Minimal syntax**: a simple grammar, no ceremony.
3. **Language agnostic**: works the same across 19 languages.
4. **Fast navigation**: one click takes you to the exact place.
5. **Structural understanding**: the tree reflects the real hierarchy of the code.
6. **AI-ready architecture**: the grammar is meant to be read by AI models as easily as by humans.
7. **Workspace awareness**: GhostMap understands the project, not just the open file.
8. **Incremental scalability**: it works the same in a 50-line file as in a 50,000-line file (see [Loading Policy](/architecture/loading-policy)).

## Next step

Continue with **[Symbol](/guide/symbol)** to understand the first layer of the model: how GhostMap extracts symbols from your code.
