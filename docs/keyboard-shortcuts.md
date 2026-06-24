---
id: keyboard-shortcuts
title: Keyboard shortcuts
sidebar_label: Keyboard shortcuts
---

# Keyboard shortcuts

## Default shortcuts

| Action | Windows / Linux | macOS | Available when |
|---|---|---|---|
| `GhostMap: Refresh` | `Ctrl+Alt+G` | `Cmd+Alt+G` | The editor has focus |

The other commands (`Filter`, `Search`, `Reset`) have no default shortcut. They are available from:

- **The command palette** (`Ctrl+Shift+P` / `Cmd+Shift+P`), searching `GhostMap: ...`.
- **The GhostMap panel toolbar**, in the left side bar.

## Assigning your own shortcuts

VS Code lets you assign any shortcut to any command:

1. Open `File → Preferences → Keyboard Shortcuts` (`Ctrl+K Ctrl+S` / `Cmd+K Cmd+S`).
2. Search `GhostMap`.
3. Click the pencil next to the command, press the combination you want, Enter.

Commands available to bind:

| Command | ID |
|---|---|
| Refresh the active file's tree | `ghostmap.refresh` |
| Filter the tree by status | `ghostmap.filterByStatus` |
| Search in the tree | `ghostmap.search` |
| Clear filters and search | `ghostmap.reset` |

## Suggested shortcuts

If you use GhostMap daily, these usually work well:

```json
[
  { "key": "ctrl+alt+s",     "command": "ghostmap.search" },
  { "key": "ctrl+alt+f",     "command": "ghostmap.filterByStatus" },
  { "key": "ctrl+alt+0",     "command": "ghostmap.reset" }
]
```

Paste them into your `keybindings.json` (accessible from the palette: `Preferences: Open Keyboard Shortcuts (JSON)`).

## Related snippets

These are not command shortcuts but prefixes you trigger with **Tab** inside a file:

| Prefix | Result |
|---|---|
| `gh`  | Named Point Anchor (line `//`) |
| `gw`  | Contextual Anchor (line `//`) |
| `gr`  | Range Anchor (line `//`) |
| `gl`  | Named Point Anchor (line `#`) |
| `gxl` | Contextual Anchor (line `#`) |
| `gxr` | Range Anchor (line `#`) |

See [Syntax](/reference/syntax) for details.

## Next step

Continue with **[Settings](/reference/settings)** to customize the defaults.
