---
id: glossary
title: Glosario
sidebar_label: Glosario
---

# Glosario

Términos que aparecen en la documentación y en la UI de GhostMap, definidos en un solo lugar.

## Anchor

Una anotación `@ghost` escrita dentro de un comentario de línea del código. Hay tres tipos: [Point](/guide/semantic-anchor) (con `#nombre`), [Contextual](/guide/contextual-anchor) (sin `#nombre`, se adjunta al símbolo cercano) y [Range](/guide/range-anchor) (delimitada con `start` y `end`).

## Backpressure

Mecanismo del scheduler de GhostMap que retrasa el inicio de un refresh por 200 ms cuando detecta cambios rápidos de tab (menos de 150 ms entre ellos). Evita encolar análisis de archivos por los que el usuario solo pasó. Archivos pequeños lo saltan automáticamente. Ver [Rendimiento](/reference/rendimiento#tab-switching).

## Coalescer

Componente del scanner progresivo que agrupa varias publicaciones de batches en una sola actualización del árbol cada 250 ms. Evita que el panel parpadee durante el análisis de archivos grandes.

## Contextual Anchor

Anchor sin `#nombre`. Se adjunta automáticamente al símbolo más cercano dentro del [ownership radius](/guide/ownership-radius). Ver [Contextual Anchor](/guide/contextual-anchor).

## Generation

Identificador interno que se incrementa con cada refresh solicitado. GhostMap usa la generation para descartar trabajo cuyo resultado ya está obsoleto (por ejemplo, refresh del archivo A cuando el usuario ya cambió al archivo B).

## Ghost Comments

Nombre canónico de la futura forma "invisible" de los anchors en V2. La información Ghost dejará de vivir como texto en el comentario y se mostrará vía decoraciones y CodeLens, mientras el código fuente permanece limpio. Ver [Roadmap](/roadmap/vision-v2).

## Ghost Context Graph

Nombre largo del **Ghost Graph**, el grafo de relaciones entre archivos, símbolos y dependencias que vivirá en el Ghost Index v2.

## Ghost Engine

Nombre canónico de la pila de extracción de símbolos. Tres capas en orden: LSP (language server) → Tree-sitter WASM → regex fallback. Ver [Rendimiento](/reference/rendimiento#el-ghost-engine).

## Ghost Graph

Forma corta de "Ghost Context Graph". Visualización de las relaciones que vive en el Ghost Index v2. Ver [Roadmap](/roadmap/vision-v2).

## Ghost Index

Caché persistente que GhostMap mantiene por workspace en `.ghostmap/ghostmap.json`. En V1 es per-document. En V2 será per-workspace (Ghost Index v2). Ver [Local State](/architecture/local-state).

## Ghost Project Index

Sinónimo de **Ghost Index v2**. El índice persistente a nivel de workspace que reemplazará la caché por archivo de V1.

## Ghost Threads

Nombre canónico de las discusiones por bloque de código planeadas para V2 Enterprise. Cada función, clase o range puede tener su propio hilo, con asignación de roles y puente con Slack.

## Ghost Tree

El árbol que GhostMap muestra en el panel lateral: clases, interfaces, funciones, métodos, anchors. Construido a partir de la salida del [Ghost Engine](#ghost-engine).

## Ghost Watcher

Componente planeado para V2: observador de archivos que mantiene el [Ghost Index v2](#ghost-index) actualizado de forma incremental cuando hay creación, eliminación, renombrado o modificación.

## Language ID

Identificador interno de VS Code para el lenguaje del archivo activo. Aparece en la barra de estado, esquina inferior derecha. Lo usa GhostMap para decidir qué patrones de extracción aplicar.

## LSP

Language Server Protocol. Especificación que usan los language servers (TypeScript Server, Pyright, etc.) para exponer información del código. GhostMap consulta al LSP del lenguaje activo como primera capa del Ghost Engine.

## Ownership Radius

Cantidad de líneas alrededor de un [Contextual Anchor](#contextual-anchor) en las que GhostMap busca un símbolo al cual adjuntar la metadata. Default: 5. Configurable vía `ghostmap.ownershipRadius`. Ver [Ownership Radius](/guide/ownership-radius).

## Point Anchor

Anchor con `#nombre` pero sin `start`/`end`. Crea su propio nodo en el árbol con identidad propia. También llamado **Semantic Anchor**. Ver [Semantic Anchor](/guide/semantic-anchor).

## Progressive Scanner

Motor de extracción para archivos grandes. Procesa el archivo en batches de 4,000 líneas y publica los primeros 50 símbolos antes de terminar. Cede el control al event loop entre batches con `setImmediate` para que el editor siga responsivo. Ver [Rendimiento](/reference/rendimiento#el-scanner-progresivo-archivos-grandes).

## Range Anchor

Anchor con `#nombre start ... end` que delimita una sección de código. Crea un nodo en el árbol que contiene todos los símbolos dentro de la región. Ver [Range Anchor](/guide/range-anchor).

## Refresh

Operación que recalcula el árbol para el documento activo. Puede ser disparada por un cambio de tab, una edición del archivo, o el comando manual `GhostMap: Refresh`.

## Scheduler

Componente que gestiona la cola de refreshes. Mantiene como máximo uno en vuelo y uno encolado por archivo. Spam clicks colapsan al "último". Ver [Arquitectura](/architecture/arquitectura-v1).

## Semantic Anchor

Otro nombre para el [Point Anchor](#point-anchor) (anchor con `#nombre`). Llamado "semántico" porque tiene identidad propia y es referenciable como nodo del árbol.

## Snapshot

Una entrada del [Ghost Index](#ghost-index) que captura el estado de extracción de un archivo: árbol, anchors, fingerprint del contenido, momento de captura. Ver [Local State](/architecture/local-state).

## Stale-cache

Estado en el que GhostMap está mostrando un snapshot previo (badge `[cached]`) mientras valida o re-extrae el archivo. Si el fingerprint no coincide, pasa a `[stale-cache]`. Resuelve solo cuando el refresh fresco completa.

## Status badge

El indicador entre corchetes que aparece en el título del panel GhostMap: `[loading]`, `[cached]`, `[stale-cache]`, `[skipped]`, `[no items]`, `[deferred]`, `[discarded:...]`. Te dice exactamente en qué estado está la extracción.

## Symbol

Clase, interfaz, struct, enum, método, función, constructor o anchor que aparece como nodo del Ghost Tree. Lo que cuenta como Symbol se decide en el [Symbol Validity Gate](/guide/symbol-validity-gate).

## Symbol Validity Gate

Filtro que decide qué identificadores se aceptan como Symbol. Rechaza nombres de una sola letra, palabras reservadas del lenguaje, y patrones ruidosos (`fn`, `cb`, `id`...). Ver [Symbol Validity Gate](/guide/symbol-validity-gate).

## Watchdog

Mecanismo que detecta si el árbol del archivo activo no se actualizó dentro de 1 segundo después de cambiar de tab, y lanza un refresh de recuperación. Solo dispara si no hay un refresh en vuelo para esa generation. Ver [Rendimiento](/reference/rendimiento#watchdog).

## WASM

WebAssembly. Formato binario portable. GhostMap empaqueta 19 gramáticas Tree-sitter compiladas a WASM dentro de la extensión. Son código estático sin capacidad de red.

## Siguiente paso

Vuelve al **[FAQ](/faq)** o a la **[Sintaxis](/reference/sintaxis)** para casos concretos.
