---
id: loading-policy
title: Loading Policy (archivos grandes)
sidebar_label: Loading Policy
---

# Loading Policy (archivos grandes)

## Problema que resuelve

Sin límites, abrir un archivo enorme (decenas o cientos de miles de líneas) dispararía el pipeline completo de extracción y construcción del árbol en cada apertura o edición, lo que podría congelar la UI del editor.

## Comportamiento

- Existe un presupuesto por defecto: `ghostmap.loading.maxAutoLines = 60000` (60,000 líneas).
- Si un archivo supera ese presupuesto, el **refresco automático** (al abrir o editar) se omite por defecto — no se ejecuta un análisis "fresco".
- Si existe un **snapshot previo válido** en el [Local State](/architecture/local-state), ese snapshot puede seguir mostrándose (UI "cacheada/stale") aunque no se recalcule.
- El **refresco manual** (botón `Refresh`) sobre un archivo que excede el presupuesto **también se omite por defecto**, a menos que habilites explícitamente `ghostmap.loading.allowManualLargeFileRefresh = true`.

## Qué verás si esto te afecta

> "Este archivo tiene más de 60,000 líneas. GhostMap no recalculó el árbol automáticamente para evitar bloquear el editor. Si el árbol mostrado se ve desactualizado, puedes habilitar `ghostmap.loading.allowManualLargeFileRefresh` y usar `Refresh` manualmente."

:::tip Relación con v2
El [Ghost Index v2](/roadmap/vision-v2) apunta a reducir este límite con un índice persistente y actualización incremental, para evitar recalcular archivos completos al abrirlos. Incluso en V2 seguirán haciendo falta presupuestos, backpressure y pruebas de recuperación para proteger el Extension Host en archivos extremos.
:::

## Siguiente paso

Continúa con **[Local State](/architecture/local-state)** para entender la caché de continuidad por workspace.
