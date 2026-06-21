---
id: data-location
title: ¿Dónde guarda los datos GhostMap?
sidebar_label: Dónde están tus datos
---

# ¿Dónde guarda los datos GhostMap?

Resumen corto: **todo se queda en tu máquina**. GhostMap no manda nada a ningún servidor.

Esta página detalla qué guarda, dónde lo guarda y cómo limpiarlo si quieres empezar de cero.

## El caché `.ghostmap/ghostmap.json`

**Ubicación:** dentro de cada workspace abierto, en `.ghostmap/ghostmap.json`.

**Qué contiene:** snapshots de los árboles de símbolos y anchors de los archivos que has abierto en ese workspace. Cada entrada incluye:

- URI del archivo
- Lenguaje
- Cantidad de líneas y bytes
- Fingerprint SHA-256 del contenido (para detectar cambios)
- Lista de símbolos extraídos (clases, funciones, etc.)
- Jerarquía resuelta
- Lista de anchors `@ghost` parseados
- Momento de captura

**Tamaño máximo:** 2 MB por workspace. Cuando se llega al límite, las entradas más antiguas se eliminan primero (FIFO por `capturedAt`).

**Formato:** JSON con `schemaVersion: 1`.

## Settings de VS Code

Los settings de `ghostmap.*` se guardan donde VS Code guarda cualquier setting:

- **User settings:** `%APPDATA%\Code\User\settings.json` (Windows), `~/Library/Application Support/Code/User/settings.json` (macOS), `~/.config/Code/User/settings.json` (Linux).
- **Workspace settings:** `.vscode/settings.json` dentro del proyecto.

GhostMap no escribe nunca settings automáticamente; tú decides cuándo cambiar uno.

## El extension en sí

VS Code instala las extensiones en:

- **Windows:** `%USERPROFILE%\.vscode\extensions\ghostmap.ghostmap-<version>`
- **macOS / Linux:** `~/.vscode/extensions/ghostmap.ghostmap-<version>`

Dentro de la carpeta del extension viven el código compilado, las gramáticas WASM y los snippets. GhostMap no toca esta carpeta en tiempo de ejecución salvo para leer recursos.

## Lo que GhostMap NUNCA guarda

- Ningún log local fuera de la consola de Output de VS Code (cuando activas `performanceLogging`).
- Ninguna telemetría.
- Ninguna identidad de usuario, máquina o sesión.
- Ningún historial de archivos abiertos fuera del snapshot persistente del workspace activo.

## ¿Debo añadirlo a `.gitignore`?

**Sí, para evitar contaminar el repo con caché generada.** Añade a tu `.gitignore`:

```text
.ghostmap/
```

Razones:

1. El snapshot depende del estado de los archivos en tu disco. Cada developer del equipo lo regeneraría con su propio contenido.
2. El fingerprint SHA-256 invalida la mayor parte del caché cuando alguien hace pull, así que checkearlo no acelera nada en equipo.

## Limpieza manual

Si quieres forzar a GhostMap a recalcular desde cero todo lo que tienes en caché para un workspace:

```bash
# Desde la raíz del workspace
rm -rf .ghostmap/
```

```powershell
# PowerShell
Remove-Item -Recurse -Force .ghostmap\
```

GhostMap regenera el snapshot la próxima vez que abras un archivo en ese workspace. La primera apertura de cada archivo paga el costo completo de extracción; las siguientes vuelven a ser instantáneas.

## Limpieza global (desinstalación)

Si quieres remover GhostMap completamente de la máquina, ver **[Cómo desinstalar](/uninstall)**.
