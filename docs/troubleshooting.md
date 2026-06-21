---
id: troubleshooting
title: Solución de problemas
sidebar_label: Solución de problemas
---

# Solución de problemas

Síntomas comunes, qué los causa y cómo confirmarlo.

## El panel GhostMap está vacío

**Causa más probable:** el archivo activo no es un lenguaje soportado, o no contiene símbolos detectables (archivo de configuración, JSON puro, etc.).

**Confirmación:**
1. Mira la barra de estado de VS Code, esquina inferior derecha: indica el Language ID.
2. Compara contra la matriz de lenguajes en [Symbol](/guide/symbol).
3. Abre otro archivo claramente soportado (por ejemplo un `.ts`). Si ahí sí ves el árbol, el problema era el archivo original.

**Otras causas posibles:**
- El archivo solo tiene símbolos con nombres rechazados por el [Symbol Validity Gate](/guide/symbol-validity-gate) (una sola letra, palabras reservadas, etc.).
- El archivo excede `ghostmap.loading.maxAutoLines` o `ghostmap.loading.maxAutoBytes`. En ese caso el badge del header dirá `[skipped]`. Ver [Loading Policy](/architecture/loading-policy).

## El badge del header se queda en `[loading]`

**Causa más probable:** el language server del lenguaje está frío y bajo presión de RAM, tardando más de 800 ms en responder. GhostMap cae automáticamente al fallback de Tree-sitter + regex, así que el árbol debería aparecer aunque sea con menos detalle.

**Confirmación:**
1. Activa logging: `"ghostmap.performanceLogging": true` en `settings.json`.
2. Reproduce el problema.
3. Abre `Output → GhostMap`. Busca eventos `lsp.timeout` o `refresh.completed`.

**Mitigación inmediata:** cambia de tab al archivo y vuelve. Eso fuerza un refresh nuevo.

## El árbol muestra datos "antiguos"

El badge dirá `[cached]` o `[stale-cache]`. Significa que GhostMap está pintando desde el snapshot persistente mientras un refresh fresco está en vuelo. En cuestión de segundos el árbol se actualiza.

Si el badge se queda en `[stale-cache]` indefinidamente, ejecuta `GhostMap: Refresh` desde la paleta de comandos.

## Aparece un anchor pero no en el árbol

**Causa probable:** el anchor está dentro de un comentario de bloque (`/* @ghost ... */`) o JSDoc (`/** @ghost ... */`). En V1 solo se reconocen anchors dentro de comentarios de línea (`//` o `#`). Ver [Sintaxis](/reference/sintaxis#solo-comentarios-de-línea).

**Otra causa:** un Range Anchor sin `#nombre`. Es sintácticamente válido pero no genera un nodo. Ver [Range Anchor](/guide/range-anchor#importante-el-nombre-es-obligatorio-para-que-se-vea).

## "Ranges sin cerrar" o diagnósticos en el editor

GhostMap detecta varios errores comunes y los reporta como diagnósticos en línea con quick fixes. La lista completa está en [Diagnostics](/reference/diagnostics).

## GhostMap se siente lento al cambiar de tab rápido

El comportamiento es intencional: cuando detecta cambios de tab rápidos (menos de 150 ms entre ellos), GhostMap aplica un backpressure de 200 ms para evitar encolar análisis innecesarios. Archivos pequeños (≤ 50 líneas) saltan este retraso automáticamente.

Si te molesta en archivos medianos, sube `ghostmap.loading.tinyLineThreshold` a 200 o más.

## El panel no aparece después de instalar

1. Abre cualquier archivo en un lenguaje soportado.
2. Mira la barra lateral izquierda: debería haber un icono nuevo de fantasma.
3. Si no aparece, reinicia VS Code (`Developer: Reload Window` desde la paleta).
4. Verifica que la extensión esté activa: ve a `Extensions` y busca "GhostMap".

## Reportar un bug

Si los pasos anteriores no resuelven tu problema, escribí a [getghostmap@proton.me](mailto:getghostmap@proton.me) con la siguiente información:

- Versión de VS Code (`Help → About`)
- Versión de GhostMap (panel de Extensions)
- Sistema operativo
- Language ID del archivo afectado
- Cantidad de líneas
- Qué dice el badge del header
- Lo que esperabas vs. lo que pasó
- Pasos para reproducir
- Si es posible, salida del Output → GhostMap con `performanceLogging` activado

## Siguiente paso

Si tienes una pregunta general en lugar de un bug, revisa el **[FAQ](/faq)**.
