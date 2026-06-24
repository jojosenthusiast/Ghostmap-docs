---
id: ghost-status
title: Ghost Status
sidebar_label: Ghost Status
---

# Ghost Status

## Definition

The **status** is the state attached to a metadata block or to an anchor.

## Supported values

These are the values validated by the Code Action Provider and offered by autocomplete:

```text
todo
in-progress
done
review
blocked
pending
```

## Normalization

The value is normalized automatically:

- Lowercased.
- Trimmed (no leading or trailing spaces).
- Internal spaces become dashes: `in progress` becomes `in-progress`.

## Related quick fixes

- If the value is not one of the supported ones, GhostMap suggests the closest match (by prefix) or defaults to `todo`.
- If the key is misspelled (for example `statu:` or `staus:`), it offers a fix to `status:`.

## Next step

Continue with **[Ghost Description](/guide/ghost-description)**.
