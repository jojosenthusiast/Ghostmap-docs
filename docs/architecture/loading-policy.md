---
id: loading-policy
title: Loading Policy (large files)
sidebar_label: Loading Policy
---

# Loading Policy (large files)

## The problem it solves

Without limits, opening a huge file (tens or hundreds of thousands of lines) would fire the full extraction and tree-building pipeline on every open or edit, which could freeze the editor UI.

## Behavior

- A default budget exists: `ghostmap.loading.maxAutoLines = 60000` (60,000 lines).
- If a file exceeds that budget, the **automatic refresh** (on open or edit) is skipped by default: no fresh analysis is run.
- If a **valid prior snapshot** exists in [Local State](/architecture/local-state), it can still be shown (cached/stale UI) even though no recompute happens.
- The **manual refresh** (`Refresh` button) on a file that exceeds the budget is **also skipped by default**, unless you explicitly enable `ghostmap.loading.allowManualLargeFileRefresh = true`.

## What you will see if this affects you

> "This file has more than 60,000 lines. GhostMap did not recompute the tree automatically to avoid blocking the editor. If the displayed tree looks stale, you can enable `ghostmap.loading.allowManualLargeFileRefresh` and use `Refresh` manually."

> **Relation to v2:**
> The [Ghost Index v2](/roadmap/v2) aims to relax this limit with a persistent index and incremental updates, to avoid recomputing whole files on open. Even in V2, budgets, backpressure, and recovery tests will still be needed to protect the Extension Host on extreme files.

## Next step

Continue with **[Local State](/architecture/local-state)** to understand the per-workspace continuity cache.
