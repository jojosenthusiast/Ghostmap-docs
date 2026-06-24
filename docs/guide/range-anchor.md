---
id: range-anchor
title: Range Anchor
sidebar_label: Range Anchor
---

# Range Anchor

## Definition

A **Range Anchor** groups a whole section of code under a single named node, with `#name start` opening the range and `@ghost end` closing it.

## Example

```ts
// @ghost #payments-refactor start description: split this service into 3 microservices | status: in-progress

class PaymentService {
  charge() {}
  refund() {}

  // @ghost description: pending move to billing-service | status: todo
  reconcile() {}

  generateInvoice() {}
}

// @ghost end
```

```text
payments-refactor      (in-progress): split this service into 3 microservices
└── PaymentService
    ├── charge
    ├── refund
    ├── reconcile        (todo): pending move to billing-service
    └── generateInvoice
```

## Important: the name is required for the range to show

A `@ghost ... start` **without** `#name` is syntactically valid, but with no name it **does not render as a node in the tree**. If you want a visible range in the Ghost Tree, you always need `#name`:

```ts
// Creates a visible node "payments-refactor"
// @ghost #payments-refactor start description: ... | status: ...

// Valid, but does not appear as a node in the tree
// @ghost start description: ... | status: ...
```

## Before / after example

**Before**: a large file with no structure, where a new dev does not know where to start or which parts are "under construction":

```ts
class PaymentService {
  charge() {}
  refund() {}
  reconcile() {}
  generateInvoice() {}
}
```

```text
PaymentService
├── charge
├── refund
├── reconcile
└── generateInvoice
```

**After**: with a Range Anchor grouping the in-flight work:

```ts
// @ghost #payments-refactor start description: split this service into 3 microservices | status: in-progress

class PaymentService {
  charge() {}
  refund() {}

  // @ghost description: pending move to billing-service | status: todo
  reconcile() {}

  generateInvoice() {}
}

// @ghost end
```

```text
payments-refactor      (in-progress): split this service into 3 microservices
└── PaymentService
    ├── charge
    ├── refund
    ├── reconcile        (todo): pending move to billing-service
    └── generateInvoice
```

At a glance, anyone can tell: this whole file is in the middle of a refactor, and `reconcile` is specifically the next thing to move.

**Typical use cases:** large refactors, module migrations, or "hot zones" of the code that need extra context before being touched.

## Next step

Continue with **[Ownership Radius](/guide/ownership-radius)** to understand how GhostMap decides which symbol a Contextual Anchor attaches to.
