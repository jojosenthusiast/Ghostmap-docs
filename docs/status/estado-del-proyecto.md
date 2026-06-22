---
id: estado-del-proyecto
title: Estado del proyecto
sidebar_label: Estado del proyecto
---

# Estado del proyecto

> **V1 en pruebas finales:**
> GhostMap V1 tiene buena cobertura de funcionalidad y pruebas automatizadas, pero todavía está pasando por validaciones manuales finales antes de un release amplio. Algunas funciones pueden comportarse de forma ligeramente distinta a lo descrito hasta que esas validaciones terminen.

## Estado de distribución

| Canal | Estado | Notas |
| --- | --- | --- |
| VSIX local | ✅ Disponible | Camino principal hoy. Ver [Instalación](/get-started/instalacion) y [Instalar desde VSIX](/vsix-install). |
| GitHub Releases | 🧭 Planificado post-tag | Todavía no hay release público. Los releases futuros podrán adjuntar el VSIX después de crear un tag. |
| VS Code Marketplace | ⏳ Pendiente | El paquete todavía no tiene `publisher`; no hay listado oficial. |
| Open VSX (VSCodium, Cursor, etc.) | 🧭 Planificado | Puente recomendado para editores compatibles con Open VSX. Script `publish:open-vsx` (`ovsx publish`) ya preparado en `package.json`; pendientes namespace, token y primer publish. |

Ningún cambio en estos canales afecta el código que ya tienes instalado por VSIX: una vez instalada, la extensión funciona localmente sin red.

## Disponible hoy (v1)

- Jerarquía symbol-first (símbolos primero, Ghosts después).
- Ownership contextual de Ghosts.
- Named anchors (`#nombre`).
- Range anchors.
- Diagnósticos (`unclosed-range`, `malformed-syntax`, `detached`, `ambiguous`, etc.).
- Hover con descripciones.
- Status tracking.
- Parsing multi-lenguaje (LSP, tree-sitter, regex fallback).
- Integración nativa en VS Code.

## Limitaciones conocidas del MVP

- **Archivos muy grandes:** archivos que superan las 60,000 líneas no se recalculan automáticamente para evitar bloquear el editor. Ver [Loading Policy](/architecture/loading-policy) para el detalle y cómo habilitar el refresco manual.
- **Rangos sin nombre:** un `@ghost ... start` sin `#nombre` es válido sintácticamente, pero no genera un nodo visible en el árbol. Ver [Range Anchor](/guide/range-anchor#importante-el-nombre-es-obligatorio-para-que-se-vea).
- **Solo comentarios de línea:** las anotaciones `@ghost` dentro de comentarios de bloque (`/* */`, `/** */`) no son reconocidas en V1. Ver [Sintaxis](/reference/sintaxis#solo-comentarios-de-línea).

## Advertencias y dirección a futuro

- **Idioma del producto (workstream separado):** GhostMap soporta 19 lenguajes hoy. Está planificada una expansión de ~20 lenguajes adicionales, bloqueada por empaquetado y procedencia de los WASM de Tree-sitter, validez de queries y cobertura de fixtures. Esos lenguajes no se anuncian como soportados hasta pasar ese gate. Ver [Requisitos](/get-started/requisitos) y [Disclaimer](/legal/disclaimer).
- **Motor V2 e integraciones Enterprise (no enviado):** la indexación a nivel de workspace, el Ghost Watcher y las integraciones Enterprise (Jira / Slack, Ghost Threads, Ghost Graph, dashboards, explicaciones con IA, permisos / audit log) están diseñadas pero **no publicadas**. Cualquier integración con servicios de servidor requeriría su propio aviso claro de privacidad y consentimiento explícito antes de salir. Ver [Roadmap: Visión v2](/roadmap/vision-v2); para una copia de la Privacy Policy vigente, escribir a [getghostmap@proton.me](mailto:getghostmap@proton.me).

## Próximos pasos

Ver **[Roadmap: Visión v2](/roadmap/vision-v2)** para la dirección a más largo plazo del proyecto.
