---
id: keyboard-shortcuts
title: Atajos de teclado
sidebar_label: Atajos de teclado
---

# Atajos de teclado

## Atajos por defecto

| Acción | Windows / Linux | macOS | Disponible cuando |
|---|---|---|---|
| `GhostMap: Refresh` | `Ctrl+Alt+G` | `Cmd+Alt+G` | El editor tiene foco |

El resto de los comandos (`Filter`, `Search`, `Reset`) no tienen atajo por defecto. Están disponibles desde:

- **La paleta de comandos** (`Ctrl+Shift+P` / `Cmd+Shift+P`), buscando `GhostMap: ...`.
- **La toolbar del panel GhostMap**, en la barra lateral izquierda.

## Asignar tus propios atajos

VS Code te permite asignar cualquier atajo a cualquier comando:

1. Abre `File → Preferences → Keyboard Shortcuts` (`Ctrl+K Ctrl+S` / `Cmd+K Cmd+S`).
2. Busca `GhostMap`.
3. Click en el lápiz junto al comando, presiona la combinación que quieras, Enter.

Comandos disponibles para asignar:

| Comando | ID |
|---|---|
| Refrescar el árbol del archivo activo | `ghostmap.refresh` |
| Filtrar el árbol por status | `ghostmap.filterByStatus` |
| Buscar en el árbol | `ghostmap.search` |
| Limpiar filtros y búsqueda | `ghostmap.reset` |

## Atajos sugeridos

Si usas GhostMap a diario, estas asignaciones suelen funcionar bien:

```json
[
  { "key": "ctrl+alt+s",     "command": "ghostmap.search" },
  { "key": "ctrl+alt+f",     "command": "ghostmap.filterByStatus" },
  { "key": "ctrl+alt+0",     "command": "ghostmap.reset" }
]
```

Pégalas en tu `keybindings.json` (accesible desde la paleta: `Preferences: Open Keyboard Shortcuts (JSON)`).

## Snippets relacionados

No son atajos de comando, sino prefijos que activas con **Tab** dentro de un archivo:

| Prefijo | Resultado |
|---|---|
| `gh`  | Point Anchor con nombre (línea `//`) |
| `gw`  | Contextual Anchor (línea `//`) |
| `gr`  | Range Anchor (línea `//`) |
| `gl`  | Point Anchor (línea `#`) |
| `gxl` | Contextual Anchor (línea `#`) |
| `gxr` | Range Anchor (línea `#`) |

Ver [Sintaxis](/reference/sintaxis) para los detalles.

## Siguiente paso

Continúa con **[Settings](/reference/settings)** para personalizar los defaults.
