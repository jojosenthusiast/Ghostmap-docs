---
id: intro
title: GhostMap
slug: /
sidebar_label: Introducción
---

# Estructura de proyecto, dentro de tu código

> **English start pages:** [Overview](/en/overview), [Install / Access](/en/install),
> and [Legal & Support](/en/legal-support). Esta sección en español tiene la
> referencia detallada.

GhostMap es una extensión de VS Code que convierte comentarios estructurados (`@ghost`) en un mapa navegable de tu proyecto: un árbol semántico que vive junto al código, no en una herramienta externa.

## El problema

Los `TODO`, `FIXME` y `HACK` que ya usas no tienen estructura. No se pueden filtrar, no tienen un estado claro y, con el tiempo, se pierden entre miles de líneas. GhostMap les da una gramática mínima y los conecta directamente con los símbolos reales del código: clases, funciones, métodos, interfaces.

> *"El código es la fuente principal de verdad. Las tareas, refactorizaciones, documentación pendiente y observaciones arquitectónicas deben existir cerca de la implementación que describen."*

## Cómo se ve en la práctica

Este comentario:

```ts
class AuthService {

  // @ghost description: revisar seguridad | status: todo
  login() {
    // ...
  }
}
```

se convierte automáticamente en esto, en el panel lateral de GhostMap:

```text
AuthService
└── login          (todo) — revisar seguridad
```

Sin configuración adicional, sin archivos externos. El árbol se reconstruye solo cada vez que editas.

## Por dónde empezar

- **[English overview](/en/overview)** — start here if you want the short English path.
- **[Instalación](/get-started/instalacion)** — genera un VSIX local e instálalo en VS Code Desktop.
- **[Primeros 5 minutos](/get-started/primeros-5-minutos)** — escribe tu primer `@ghost` y mira aparecer el árbol.
- **[Guía / Conceptos](/guide/philosophy)** — entiende los fundamentos: símbolos, anchors, ownership.
- **[Referencia](/reference/sintaxis)** — sintaxis completa de `@ghost`, comandos y settings.

## Tres tipos de Ghost

| Tipo | Ejemplo | Qué hace |
|---|---|---|
| **Contextual** | `// @ghost description: ... \| status: ...` | Se adjunta automáticamente al símbolo más cercano. |
| **Named (Semantic Anchor)** | `// @ghost #nombre description: ...` | Crea un nodo propio en el árbol, con identidad propia. |
| **Range** | `// @ghost #nombre start ... // @ghost end` | Agrupa una sección completa de código bajo un mismo nodo. |

GhostMap Core —todo lo cubierto en esta documentación— es el alcance documentado para V1. GhostMap es un producto propiedad del *GhostMap project owner* (MarxWellB), distribuido bajo la **GhostMap Free Non-Commercial License**: uso personal, educativo y de evaluación sin costo; cualquier uso comercial, de empresa, en producción o que genere ingresos requiere autorización escrita. Las consultas de licenciamiento comercial van a [getghostmap@proton.me](mailto:getghostmap@proton.me).
