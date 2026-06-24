---
id: syntax
title: 'Syntax: @ghost annotations'
sidebar_label: Syntax
---

# Syntax: `@ghost` annotations

There are three valid ways to write a `@ghost` annotation. All three use the same base grammar; what changes is the presence of `#name` and of `start`/`end`.

## 4.1 Point Anchor (named)

```ts
// @ghost #name description: ... | status: ...
```

```python
# @ghost #name description: ... | status: ...
```

Creates its own node in the tree with identity (`#name`). See [Semantic Anchor](/guide/semantic-anchor).

## 4.2 Contextual Anchor (unnamed)

```ts
// @ghost description: ... | status: ...
```

```python
# @ghost description: ... | status: ...
```

Does not create its own node: it attaches to the closest symbol within the [ownership radius](/guide/ownership-radius). See [Contextual Anchor](/guide/contextual-anchor).

## 4.3 Range Anchor

```ts
// @ghost #name start description: ... | status: ...

...code...

// @ghost end
```

```python
# @ghost #name start description: ... | status: ...

...code...

# @ghost end
```

Groups a whole code section under a single node. See [Range Anchor](/guide/range-anchor).

## 4.4 Available snippets

GhostMap ships snippets to create each annotation type quickly:

Snippet availability only means the editor can insert the right comment syntax. It does not guarantee Ghost Tree symbol extraction for that language.

| Prefix | Languages | Result |
|---|---|---|
| `gh`  | JS/TS/TSX/C/C++/Java/Go/PHP/C#/Rust/Kotlin/Swift/Scala/Groovy/Solidity (line `//` comment) | Named Point Anchor |
| `gw`  | same | Contextual Anchor |
| `gr`  | same | Range Anchor |
| `gl`  | Python/Ruby/Elixir/Shell (line `#` comment) | Named Point Anchor |
| `gxl` | same | Contextual Anchor |
| `gxr` | same | Range Anchor |

### Smart contextual completion

Typing `gh` then **Tab** on an empty line triggers a completion that picks the annotation type based on context:

- If there is a nearby symbol within the ownership radius, it suggests `// @ghost <symbolName> description: ... | status: todo` (Contextual).
- If no symbol is nearby, it suggests `// @ghost #name description: ... | status: todo` (Semantic).
- If **several** candidates are equally close, it suggests the nearest one first as contextual, then offers the semantic option (to avoid ambiguity) and one contextual option per additional candidate.

> **Note:**
> The completion only suggests symbols defined **below** in the file, within the configured ownership radius.

## 4.5 Grammar rules and common errors

- The line must start (ignoring whitespace) with the language's line-comment prefix (`//` or `#`), and there must be a space after it: `// @ghost ...` is valid, `//@ghost ...` is **not**.
- After `@ghost ` one of these forms must come:
  - `#name ...`
  - `end`
  - `start ...`
  - `description: ...`
  - `status: ...`
- Any other loose word after `@ghost` (for example `// @ghost review_payments`) is considered **malformed hybrid syntax** and produces a warning diagnostic with two quick fixes:
  1. Convert to Semantic Anchor: `// @ghost #review_payments`
  2. Convert to Contextual Anchor: `// @ghost description: review_payments`

### Line comments only

In V1, an Anchor is only valid when written as a **line comment**: `// @ghost ...` or `# @ghost ...`.

Block or JSDoc comments (`/* @ghost ... */`, `/** @ghost ... */`) are **not valid anchor evidence in V1** and are ignored by the parser. If a `@ghost` inside a `/** ... */` block does not appear in the tree, that is the expected behavior. Block comment support may arrive in a future version.

## Next step

Continue with **[Ghost Tree](/reference/ghost-tree)** to see how the hierarchy is built and which commands are available in VS Code.
