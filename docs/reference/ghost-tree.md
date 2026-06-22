---
id: ghost-tree
title: Ghost Tree
sidebar_label: Ghost Tree
---

# Ghost Tree

## Cómo se construye la jerarquía

El árbol se construye por **contención de rangos**, no por nombres compuestos.

**Regla de pertenencia:** el nodo A es padre de B si `A.start <= B.start` y `A.end > B.start`: es decir, B "nace" dentro del rango de A, aunque su cuerpo se extienda más allá.

## Ejemplo combinando símbolos y anchors

```ts
// @ghost #pagos start description: módulo de pagos v2 | status: in-progress

class PaymentService {

  // @ghost description: falta manejar timeouts | status: todo
  charge() {}

  refund() {}
}

// @ghost end
```

```text
pagos                 (in-progress): módulo de pagos v2
└── PaymentService
    ├── charge        (todo): falta manejar timeouts
    └── refund
```

## Vista en VS Code

El panel lateral "GhostMap" muestra el árbol con iconos por tipo de nodo:

- 🔵 Function/Method/Constructor → ícono de método (azul).
- 🟣 Class/Interface/Struct/Enum → ícono de clase (morado).
- 🟢 Anchor → ícono de bookmark (verde).
- ⚪ Nodo "de contexto": visible solo porque un hijo coincide con un filtro/búsqueda activa → ícono atenuado con la etiqueta `(context)`.

Hacer clic en un nodo navega directamente a la línea correspondiente y resalta brevemente el rango.

## Comandos y toolbar

| Botón / Comando | Etiqueta | Notas |
|---|---|---|
| Refrescar árbol | `Refresh` | Re-ejecuta el pipeline para el documento activo (sujeto a [Loading Policy](/architecture/loading-policy)). |
| Filtrar | `Filter` | Abre el menú de filtro por tipo o por status. |
| Reiniciar filtros | `Reset` | Limpia tipo, status y búsqueda activos. |
| Buscar | `Search` | Abre el input de búsqueda libre (nombre/descripción). |

Todos los comandos aparecen en la paleta de comandos de VS Code agrupados bajo la categoría **GhostMap** (por ejemplo, "GhostMap: Refresh", "GhostMap: Filter").

## Filtros y búsqueda

- **Filtro por tipo:** `function` / `class` / `anchor` / Todos.
- **Filtro por status:** lista dinámica de los estados presentes en el proyecto, con conteo (`todo (5)`, `in-progress (2)`, etc.). El último filtro de status usado se recuerda entre sesiones.
- **Búsqueda libre:** filtra por nombre o por contenido de `description` (sin distinguir mayúsculas/minúsculas).
- **Visibilidad por burbuja:** si un hijo cumple el filtro/búsqueda, su(s) padre(s) permanecen visibles (marcados como "contexto") aunque no cumplan el filtro por sí mismos. Así nunca se pierde la ubicación del resultado dentro del árbol.

## Siguiente paso

Continúa con **[Diagnostics](/reference/diagnostics)** para ver qué advertencias puede mostrar GhostMap y cómo resolverlas.
