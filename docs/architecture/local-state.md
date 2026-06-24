---
id: local-state
title: 'Local State (.ghostmap/ghostmap.json)'
sidebar_label: Local State
---

# Local State (`.ghostmap/ghostmap.json`)

## What it is

A per-workspace local cache that GhostMap keeps in V1, stored in `.ghostmap/ghostmap.json` inside the project. GhostMap remembers the state of your files across sessions for faster loads.

It is a first (simpler) step toward what the [v2 roadmap](/roadmap/v2) calls the "Ghost Project Index": in V1 it is a per-file continuity cache; in v2 it becomes a full workspace index with relations, an incremental watcher, and analytics.

## Behavior

- On close and reopen of a document, GhostMap can restore the last known state (`ghostmap.json`) instead of recomputing from scratch immediately.
- **Safety rule:** if the restored data is "stale" (not yet confirmed valid), it is not published as fresh in hover or navigation. The UI may show a provisional view, but GhostMap does not claim that information is up to date until it confirms it.
- Defensively handled cases: corrupted JSON and unsupported schemas from older file versions. In both cases, GhostMap does not fail and does not show incorrect data as valid.

## Next step

This is the end of the Architecture section. If you want to know what comes next, continue with **[Roadmap: v2 vision](/roadmap/v2)**.
