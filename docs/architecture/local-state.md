---
id: local-state
title: 'Local State (.ghostmap/ghostmap.json)'
sidebar_label: Local State
---

# Local State (`.ghostmap/ghostmap.json`)

## Qué es

Una caché local por workspace que GhostMap mantiene en V1, guardada en `.ghostmap/ghostmap.json` dentro del proyecto. GhostMap recuerda el estado de tus archivos entre sesiones para cargar más rápido.

Es un primer paso (más simple) hacia lo que el [roadmap v2](/roadmap/vision-v2) llama "Ghost Project Index": en V1 es una caché de continuidad por archivo/documento; en v2 se plantea como un índice completo de workspace con relaciones, watcher incremental y analítica.

## Comportamiento

- Al cerrar y reabrir un documento, GhostMap puede restaurar el último estado conocido (`ghostmap.json`) en lugar de recalcular desde cero inmediatamente.
- **Regla de seguridad:** si los datos restaurados son "stale" (no se ha confirmado que sigan siendo válidos), no se publican como frescos en hover ni en navegación: la UI puede mostrar algo provisional, pero GhostMap no afirma que esa información está al día hasta confirmarlo.
- Casos manejados de forma defensiva: JSON corrupto y esquemas no soportados de versiones anteriores del archivo: en ambos casos, GhostMap no falla ni muestra datos incorrectos como válidos.

## Siguiente paso

Con esto termina la sección de Arquitectura. Si quieres saber qué viene después, continúa con **[Roadmap: Visión v2](/roadmap/vision-v2)**.
