---
id: vision-v2
title: 'Roadmap: Visión v2'
sidebar_label: Visión v2
---

# Roadmap: Visión v2

GhostMap Core (todo lo descrito en el resto de esta documentación) es el alcance de V1 bajo la **GhostMap Free Non-Commercial License** (source-available, uso no comercial). Lo que sigue es la visión para futuras capacidades Enterprise, pensadas para equipos donde esta información necesita fluir entre la capa técnica, operativa y directiva; su uso comercial requeriría autorización por escrito o un futuro flujo de licencia.

> **Nada de esta sección está publicado:**
> Todo lo descrito en esta página (Ghost Index v2, Ghost Watcher, Ghost Threads, Ghost Graph, dashboards, explicaciones con IA, integraciones con Jira / Slack, permisos / audit log) es **dirección a futuro**, no funcionalidad disponible en V1 (0.5.x). Lo que ya funciona hoy se describe en el resto de la documentación.
>
> Cualquier integración con servicios de servidor que aparezca a futuro requerirá su propia divulgación en la Privacy Policy de GhostMap y un consentimiento explícito antes de enviar datos fuera de tu máquina (para una copia actual, escribir a [getghostmap@proton.me](mailto:getghostmap@proton.me)). Nada en este roadmap es una promesa de fecha ni de alcance final.

## V2: motor de indexación workspace-wide (planificado)

**Estado hoy (V1, 0.5.x):** el Ghost Tree se calcula por archivo activo. Cada archivo abierto persiste su snapshot en `.ghostmap/ghostmap.json` (ver [Local State](/architecture/local-state)). Eso es una **caché por documento**, no un índice de workspace. No hay file-system watcher ni validador de fingerprint en background (el intento anterior se quitó por congelar el Extension Host).

**Dirección V2 (no publicada):** un índice persistente a nivel de workspace (el **Ghost Index v2**) construido con shards JSON por carpeta de primer nivel, mantenido actualizado incrementalmente por un **Ghost Watcher** sobre el filesystem y validado fuera de banda por un **Ghost Validator** en un worker thread (mtime prefilter + SHA-256 en stream). El path de refresh del archivo activo (la responsividad V1) se preserva: el motor V2 se *capa* por debajo, no lo reemplaza.

**Beneficio si se publica:** apertura de cualquier archivo del workspace en milisegundos desde el índice, navegación cross-archivo y base para integraciones más ricas. Hasta que se publique, sigue siendo dirección de roadmap.

**Contenido potencial del índice:** archivos, símbolos, anchors, metadata, jerarquía resuelta, diagnósticos y, a futuro, relaciones/dependencias entre archivos (el **Ghost Graph**, también conocido como **Ghost Context Graph**).

## Expansión de lenguajes (workstream separado, planificado)

Independiente del motor V2, hay un workstream para añadir ~20 lenguajes adicionales (Kotlin, Swift, Haskell, OCaml, Clojure, Lua, R, Bash, familia SQL, …) sobre la base actual de 19. **No está publicado.** El gate antes de marcar cualquier lenguaje como soportado es:

- empaquetado reproducible de las gramáticas Tree-sitter / WASM,
- validez de queries contra la versión exacta de cada gramática,
- smoke de "load + sample query" por gramática,
- fixtures de nesting / iconos / anchors en `test/matrix/`,
- y, donde haga falta, PRs upstream a la gramática.

Ver [Disclaimer → Language pack expansion](/legal/disclaimer) y la sección "Expansión de lenguajes" en [Requisitos](/get-started/requisitos).

> **Gate antes de integraciones futuras:**
> Antes de publicar cualquier integración con Jira, Slack, IA, dashboards o servicios de servidor, GhostMap necesita cerrar estos puntos como requisitos de producto, no como detalles opcionales:
>
> - **Permisos y roles:** qué acciones puede iniciar una persona, cuáles puede sugerir un agente, y cuáles requieren aprobación explícita.
> - **Modelo de datos:** qué campos se guardan localmente, cuáles viajan a servicios externos, cómo se versionan y cómo se eliminan.
> - **Consentimiento y privacidad:** aviso actualizado, consentimiento in-editor antes de transmitir datos, y separación clara entre V1 local-only y futuras capacidades conectadas.
> - **Pruebas de recuperación:** escenarios de permisos revocados, tokens expirados, integraciones caídas, conflictos de escritura y rollback seguro si una automatización falla.
>
> Hasta que esos gates existan y estén verificados, las capacidades conectadas siguen siendo visión, no producto publicado.

## Pilar 1: Retomar el trabajo sin fricción

Un dev termina su día. Al siguiente, abre VS Code y GhostMap.

- **Dashboard general** que muestra el estado de todos los archivos y los Ghosts marcados como urgentes.
- **Urgencia derivada de Jira:** GhostMap se conecta a Jira, obtiene los tiempos del sprint actual y de sprints dependientes, e identifica (con ayuda de IA) relaciones y dependencias entre sprints para marcar qué Ghosts son urgentes (por vencimiento propio o por bloquear otro sprint).
- **Chat local en VS Code** que resume conversaciones y contexto relevante, y propone qué hacer a continuación según urgencia y alcance.
- **Retomar contexto con un click:** el dev entra directo a la primera tarea urgente, o continúa exactamente donde lo dejó el día anterior.
- **Ghost Threads (discusiones por bloque de código):** cualquier función, clase o bloque puede tener su propia discusión, con responsable técnico, QA, etc., con permisos configurables, incluyendo comentarios enviados desde Slack hacia una discusión concreta.
- **Avance tangible en Jira:** al analizar un Ghost o un Range Anchor grande, GhostMap puede proponer una descomposición en subtareas dentro de Jira. Cada subtarea queda vinculada a su propio Ghost en el código, y a medida que se marcan como `done`, el avance de la tarea padre se actualiza de forma proporcional y visible.
- **Cierre de tarea automatizado:** al cambiar el status de un Ghost a `done` (o equivalente), GhostMap puede generar el commit correspondiente, actualizar Jira, notificar a QA/revisor, y reflejar el nuevo estado en tiempo real para todo el equipo.
- **Permisos y trazabilidad:** dado que esta capa puede generar commits, modificar tickets y crear subtareas automáticamente, Enterprise incluye control de permisos por rol y un registro de qué acción fue tomada por una persona y cuál por un agente de IA.

## Pilar 2: Entender código ajeno

Un dev nuevo abre un archivo y no sabe qué hay realmente ahí.

- **Explicaciones generadas por IA** sobre símbolos sin documentación previa.
- **Ghost Graph:** grafos que muestran relaciones entre archivos, símbolos y dependencias (el **Ghost Context Graph** desde el índice).
- **Listas con contexto y urgencia:** al ver qué funciones/clases hay en un archivo, también se indica qué está marcado como urgente ahí mismo.
- **Historial de decisiones:** acceso directo a las discusiones pasadas sobre por qué se tomó tal decisión en ese bloque de código. Información que hoy solo vive en la memoria de quien lo escribió.
- **Recomendaciones de estructura no obligatorias:** GhostMap puede sugerir organizar el código (por ejemplo, con Range Anchors) sin forzarlo.
- **Notificaciones in-editor:** cambios de estado o nuevas discusiones relevantes llegan directo a VS Code, con un click para ir al lugar exacto.

## Ghost Comments y documentación retroactiva

- **Ghost Comments (ghosts invisibles):** en v2, la información Ghost deja de vivir como texto literal en el archivo. VS Code la muestra visualmente con decoraciones y CodeLens, sin que ocupe líneas en el código fuente. El código permanece limpio, y la información vive en el Ghost Index v2.
- **Conversión de comentarios existentes:** comentarios tipo `TODO`/`FIXME` ya presentes en el código pueden convertirse automáticamente en Ghost Metadata, reutilizando la misma resolución de ownership que ya existe hoy.
- **Documentación automática de código legacy:** análisis con IA y grafos sobre código sin ningún Ghost, que propone Range Anchors automáticos y genera descripciones. Útil para "bootstrapear" el índice en proyectos que nunca usaron GhostMap.

## Siguiente paso

Para ver el estado actual de V1 y sus limitaciones conocidas, continúa con **[Estado del proyecto](/status/estado-del-proyecto)**.
