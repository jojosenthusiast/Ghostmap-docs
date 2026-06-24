---
id: first-5-minutes
title: First 5 minutes
sidebar_label: First 5 minutes
---

# First 5 minutes

This guide takes you from zero to your first Ghost Tree, with no theory required up front. If you want to understand the *why* of each piece later, the [Guide](/guide/philosophy) section covers it.

## Step 1: Open any file in your project

The **GhostMap** panel shows up in the side bar. If the file has no annotations yet, the panel is empty.

## Step 2: Type `gh` and press Tab above a function or class

```ts
class PaymentService {

  gh   (type "gh" and press Tab here)
  charge(amount: number) {
    // ...
  }
}
```

GhostMap detects that `charge` is the closest symbol and autocompletes to:

```ts
class PaymentService {

  // @ghost charge description:  | status: todo
  charge(amount: number) {
    // ...
  }
}
```

## Step 3: Fill in the description and save

```ts
  // @ghost charge description: validate negative amounts | status: todo
  charge(amount: number) {
```

## Step 4: Look at the GhostMap panel

```text
PaymentService
└── charge        (todo): validate negative amounts
```

## Step 5: Create your first named Anchor

An Anchor with `#name` does not need to be attached to any function. It is ideal for general notes about the file or the module:

```ts
// @ghost #pending-payments description: review Stripe v2 integration | status: review
```

```text
PaymentService
└── charge          (todo): validate negative amounts
pending-payments    (review): review Stripe v2 integration
```

## Step 6: Filter

Click the filter icon in the panel, pick `todo`, and the tree shows only the pending Ghosts.

## That is all

From here on, every `// @ghost ...` you write organizes itself. To understand the difference between the three annotation types (Point, Contextual, Range), continue with **[Guide / Philosophy](/guide/philosophy)** then **[Syntax reference](/reference/syntax)**.
