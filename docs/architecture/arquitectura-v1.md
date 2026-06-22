---
id: arquitectura-v1
title: Arquitectura actual (v1 / MVP)
sidebar_label: Arquitectura v1
---

# Arquitectura actual (v1 / MVP)

> **Nota:**
> Esta sección es para devs curiosos y colaboradores. No es necesaria para el uso diario de GhostMap.

## Diagrama de flujo

```text
Workspace
   ↓
Symbol Extraction      (LSP → tree-sitter → regex/PHP fallback)
   ↓
Anchor Parsing         (lee comentarios @ghost del documento)
   ↓
Ownership Resolution   (pega metadata contextual al símbolo más cercano;
                         detecta detached/ambiguous)
   ↓
Hierarchy Builder      (árbol por contención de rangos)
   ↓
Ghost Tree             (filtros, búsqueda, iconos)
   ↓
VS Code UI             (Tree View + Hover + Diagnostics + Code Actions)
```

## Cuándo se ejecuta

Este pipeline completo se ejecuta:

- Al abrir o activar un editor.
- En cada edición, con un pequeño retraso (debounce) para no recalcular en cada tecla.

En V1, no hay persistencia completa entre sesiones a nivel de workspace: cada apertura de archivo repite el cálculo. La excepción es la caché de continuidad por documento descrita en [Local State](/architecture/local-state). El [roadmap v2](/roadmap/vision-v2) plantea eliminar este recálculo por completo con un índice persistente de workspace.

## Modelo de datos (`GhostItem`)

```ts
interface GhostItem {
  id: string;
  name: string;
  type: 'function' | 'class' | 'anchor';
  range: vscode.Range;
  endLine?: number;
  anchorKind?: 'single' | 'range' | 'contextual';
  description?: string;
  status?: string;
  children?: GhostItem[];
}
```

## Siguiente paso

Continúa con **[Loading Policy](/architecture/loading-policy)** para entender cómo GhostMap maneja archivos grandes.
