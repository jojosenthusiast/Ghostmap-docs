---
id: settings
title: Configuración / Settings
sidebar_label: Settings
---

# Configuración

GhostMap funciona con valores por defecto razonables. Puedes ajustar cualquiera de estos settings desde `settings.json` o desde la UI de Settings de VS Code (busca "GhostMap").

## Comportamiento de anotaciones `@ghost`

### `ghostmap.ownershipRadius`

- **Default**: `5`
- **Rango**: `1` a `20`
- Número de líneas alrededor de una anotación `@ghost` en las que GhostMap busca un símbolo cercano para enlazar la descripción y el status. Se usa también en los diagnósticos `detached` y `ambiguous` y en el autocompletado contextual de `gh`+Tab.
- Súbelo si escribes comentarios largos antes de una función. Bájalo si los anchors se enganchan al símbolo equivocado.
- Ver [Ownership Radius](/guide/ownership-radius).

### `ghostmap.statusColors`

- **Default**: un mapa con `done`, `complete`, `completed`, `todo`, `pending`, `in-progress`, `progress`, `review`, `testing`, `blocked`, `error`, `critical` enlazados a los colores de chart del tema activo (verde, amarillo, azul, morado, rojo).
- Permite añadir o redefinir el color de cualquier status custom. Las claves que no estén en el mapa se renderizan sin color de override.

```json
"ghostmap.statusColors": {
  "todo": "charts.yellow",
  "spike": "charts.purple"
}
```

## Loading policy (presupuesto de archivos)

### `ghostmap.loading.maxAutoLines`

- **Default**: `60000`
- **Mínimo**: `100`
- Límite de líneas por archivo para el refresco automático. Archivos más grandes se marcan como `skipped` para mantener el editor responsivo. El scanner progresivo de GhostMap evalúa una regex por línea por patrón, así que el costo crece linealmente.
- Súbelo si trabajas habitualmente con archivos generados de 100k+ líneas y tu máquina lo aguanta.
- Ver [Loading Policy](/architecture/loading-policy).

### `ghostmap.loading.maxAutoBytes`

- **Default**: `10000000` (10 MB)
- **Mínimo**: `1024`
- Límite de tamaño en bytes para el refresco automático. Cubre el caso donde un archivo no es enorme en líneas pero sí en bytes (minified JS, JSON grande). El fingerprint SHA-256 de un archivo de varios MB toma cientos de milisegundos por sí solo.

### `ghostmap.loading.tinyLineThreshold`

- **Default**: `50`
- **Rango**: `0` a `500`
- Archivos con esta cantidad de líneas o menos saltan la ventana de 200 ms de backpressure por cambio rápido de tabs (aparecen al instante en el árbol) y se evalúan también para detectar si están vacíos o solo contienen espacios.
- Súbelo a 200+ si quieres que más archivos pequeños eviten el backpressure (tradeoff: menos coalescencia entre cambios rápidos consecutivos).

### `ghostmap.loading.allowManualLargeFileRefresh`

- **Default**: `false`
- Cuando está en `true`, el comando manual **GhostMap: Refresh** ignora `maxAutoLines` y `maxAutoBytes`. Útil para investigar puntualmente un archivo generado sin tener que subir el presupuesto global.

## Indexación en segundo plano

### `ghostmap.backgroundIndex.enabled`

- **Default**: `false`
- Activa una cola que escanea de forma oportunista archivos visibles y abiertos durante los momentos de inactividad. La concurrencia está fijada en 1 y la cola se limita a 128 entradas.
- Está desactivada por defecto porque en máquinas bajo presión puede competir con el language server activo. Actívala si tienes RAM y CPU de sobra y quieres que las tabs a las que cambies tengan el árbol ya caliente.

## Observabilidad

### `ghostmap.performanceLogging`

- **Default**: `false`
- Activa logging estructurado de eventos de activación y refresh en la consola del Extension Host. Los eventos aparecen en `Output → GhostMap`: tiempos de cada refresh, batches del scanner progresivo, warm-up del LSP, recuperaciones del watchdog, eventos de la cola de background, etc.
- Pensado para debugging puntual cuando algo se siente lento. Combínalo con el badge de estado del header del panel para una imagen completa.

```json
"ghostmap.performanceLogging": true
```

## Comandos contribuidos

| Comando (Command Palette) | Para qué sirve |
|---|---|
| `GhostMap: Refresh` | Fuerza un recálculo del documento activo. Con `allowManualLargeFileRefresh: true` puede saltarse los límites de tamaño. |
| `GhostMap: Filter` | Filtra el árbol por status (o por tipo). |
| `GhostMap: Search` | Filtra el árbol por substring de nombre/descripción. |
| `GhostMap: Reset` | Limpia filtros y búsqueda activos. |

Todos los comandos aparecen también en la toolbar del panel **GhostMap**.

## Siguiente paso

Si quieres entender cómo funciona el pipeline por dentro, continúa con **[Arquitectura v1](/architecture/arquitectura-v1)**.
