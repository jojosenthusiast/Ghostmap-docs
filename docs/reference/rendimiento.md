---
id: rendimiento
title: Rendimiento
sidebar_label: Rendimiento
---

# Rendimiento

Esta página documenta los números reales del sistema en V1, cómo se comporta bajo distintas condiciones, y qué palancas tienes para ajustarlo.

## El Ghost Engine

El **Ghost Engine** es la pila de extracción de símbolos. Ejecuta en tres pasos en orden de preferencia:

```
LSP (language server)
  → si no disponible o lento (> 800 ms): Tree-sitter WASM
    → si no hay gramática disponible: regex fallback
```

Cada capa es más rápida y menos precisa que la anterior. En la mayoría de los casos, LSP da el mejor resultado. En archivos pequeños con LSP activo, el Ghost Engine hace un cortocircuito y omite Tree-sitter y regex completamente (ahorra hasta 1.2 s de carga de WASM).

## Números de referencia

| Escenario | Tiempo |
|---|---|
| Apertura con Ghost Index (snapshot válido) | **< 50 ms** |
| Archivo pequeño (< 500 líneas) con LSP activo | **200 – 600 ms** |
| Archivo 60k líneas, scanner progresivo | **~33 ms** de scan puro |
| LSP cold start en condiciones normales | **800 ms – 3 s** |
| LSP cold start bajo presión de RAM (80–90%) | **5 – 35 s** (GhostMap no espera: cae al fallback a los 800 ms) |

> **Ghost Index es la clave:**
> El escenario más común después de la primera apertura es siempre el primero: < 50 ms desde snapshot. La primera apertura de un archivo paga el costo de extracción; todas las siguientes no.

## El scanner progresivo (archivos grandes)

Para archivos de 50,000 líneas o más, GhostMap usa un scanner basado en regex que cede el control al event loop de VS Code entre lotes: el editor no se congela mientras analiza.

- Tamaño de lote: 4,000 líneas por iteración.
- Primeros 50 símbolos se publican en el árbol antes de terminar el análisis completo. El árbol aparece rápido y se va completando.
- El árbol en construcción se actualiza cada 250 ms (publish coalescer), no en cada símbolo encontrado. Esto evita que el panel parpadee.

**Resultado medido en C++ 60k líneas:** scan puro de ~33 ms de tiempo de CPU efectivo (vs ~19.5 s del overhead anterior a la optimización con `setTimeout`).

## Comportamiento bajo presión de RAM

Con el sistema al 80–90% de RAM en uso:

- El language server puede tardar 5–30 s en responder. GhostMap tiene un timeout de **800 ms**: si el LSP no contesta, cae a Tree-sitter + regex y publica el árbol sin esperar más.
- El **badge de estado** en el header del panel muestra `[loading]`, `[cached]`, `[stale-cache]` o `[discarded:...]` para que sepas exactamente qué está pasando sin tener que abrir la consola.
- El **Ghost Index** mitiga el problema: si el archivo ya fue analizado antes, el árbol se carga desde el snapshot en < 50 ms, sin tocar el LSP.

## Tab switching

Cambiar de archivo rápido (< 150 ms entre switches) activa un mecanismo de backpressure:

- GhostMap espera 200 ms antes de iniciar el refresh del archivo destino.
- Archivos de ≤ 50 líneas (`ghostmap.loading.tinyLineThreshold`) ignoran este retraso. Aparecen al instante.
- Si el usuario sigue cambiando tabs durante ese delay, solo se procesa el último destino. Los intermedios se descartan.

Esto evita que abrir 10 tabs seguidos encole 10 análisis completos.

## Watchdog

Si el árbol no se actualiza en 1 segundo después de cambiar de archivo, GhostMap tiene un watchdog que detecta el estado y lanza un refresh de recuperación, pero solo si no hay ya un refresh en vuelo para ese mismo archivo. Esto previene doubles LSP calls bajo estrés.

## Límites y cómo ajustarlos

Todos los límites de rendimiento son configurables. La tabla completa está en [Settings](/reference/settings); los más relevantes:

| Setting | Default | Cuándo ajustar |
|---|---|---|
| `ghostmap.loading.maxAutoLines` | `60000` | Si trabajas con archivos > 60k líneas regularmente. |
| `ghostmap.loading.maxAutoBytes` | `10000000` (10 MB) | Si tienes archivos generados muy pesados. |
| `ghostmap.loading.tinyLineThreshold` | `50` | Sube a 200+ si quieres que más archivos ignoren el backpressure. |
| `ghostmap.loading.allowManualLargeFileRefresh` | `false` | Activa si quieres poder refrescar archivos grandes con el botón manual. |
| `ghostmap.backgroundIndex.enabled` | `false` | Activa si tienes RAM de sobra y quieres pre-indexar tabs abiertas en idle. |

## Observabilidad

Si algo se siente lento y quieres entender por qué, activa el logging estructurado:

```json
"ghostmap.performanceLogging": true
```

Los eventos se publican en `Output → GhostMap` en VS Code: tiempos de cada refresh, batch del scanner progresivo, LSP warm-up, watchdog recoveries, y más.

Combínalo con el badge de estado en el header del panel para tener una imagen completa sin necesidad de abrir la consola.
