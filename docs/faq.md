---
id: faq
title: Preguntas frecuentes
sidebar_label: FAQ
---

# Preguntas frecuentes

## ¿En qué se diferencia de la vista "Outline" de VS Code?

La vista Outline nativa de VS Code muestra los símbolos del archivo activo según el language server, sin más. GhostMap añade:

- **Fallback automático** cuando el language server no responde o no está disponible, usando Tree-sitter y regex. En los **19 lenguajes soportados** (ver [Requisitos](/get-started/requisitos)) esto suele significar que tienes árbol incluso cuando Outline aparece vacío. En lenguajes fuera de esa lista (workstream de expansión planificado, ver [Disclaimer](/legal/disclaimer)), no hay árbol: GhostMap no inventa estructura.
- **Anotaciones `@ghost`** integradas al árbol: TODOs nombrados, regiones marcadas, descripciones con status, todo navegable.
- **Snapshot persistente por archivo** entre sesiones: abrir un archivo previamente visto pinta el árbol en < 50 ms, no hay que esperar al LSP. Hoy esa caché es por documento, no un índice de workspace completo: eso es V2 (ver [Roadmap](/roadmap/vision-v2)).
- **Scanner progresivo** para archivos de 60k líneas sin congelar el editor.
- **Diagnósticos** sobre tus anchors y quick fixes.

Outline sigue siendo útil para lenguajes donde el LSP es excelente y no necesitas anchors. GhostMap es la opción cuando trabajas en archivos grandes, cambias de lenguaje constantemente, o quieres dejar marcas estructuradas en el código.

## ¿Requiere instalar algo aparte del extension?

No. Las 19 gramáticas Tree-sitter vienen pre-compiladas dentro de la extensión, no se descargan en tiempo de ejecución. Si tienes un language server activo para tu lenguaje, GhostMap lo aprovechará automáticamente; si no, usa el fallback. Ver [Requisitos](/get-started/requisitos).

## ¿Funciona sin conexión a internet?

Sí. GhostMap no hace ninguna llamada de red. Toda la extracción de símbolos, parseo de anchors, persistencia y análisis sucede localmente.

## ¿Manda datos a algún servidor?

No. La extensión no envía datos de proyecto (código, contenido de archivos, rutas, telemetría ni metadata) a mantenedores ni a servidores de GhostMap. Para una copia de la Privacy Policy vigente, escribir a [getghostmap@proton.me](mailto:getghostmap@proton.me).

## ¿Funciona en VS Code Web / vscode.dev?

De forma limitada. GhostMap se declara como `extensionKind: ["workspace"]`, lo que significa que requiere un host de extensión completo. En entornos virtuales como vscode.dev, el Ghost Tree funciona en memoria pero la persistencia a `.ghostmap/ghostmap.json` no está disponible.

## ¿Qué pasa con la carpeta `.ghostmap/`?

Es el caché local que GhostMap mantiene por workspace. Contiene los árboles snapshot de los archivos que has abierto. Ver [¿Dónde guarda los datos GhostMap?](/data-location) para más detalle.

**¿Debería commitearla?** No. Añádela a `.gitignore`:

```text
.ghostmap/
```

**¿Es seguro borrarla?** Sí. La próxima apertura de cada archivo paga el costo de extracción completa una vez y se vuelve a poblar.

## ¿Por qué los archivos > 60k líneas se marcan como `[skipped]`?

Para mantener el editor responsivo. El scanner regex evalúa un patrón por línea por lenguaje, y arriba de ~60k líneas el costo acumulado degrada la responsividad. Si necesitas analizar un archivo más grande:

- Sube `ghostmap.loading.maxAutoLines`.
- O activa `ghostmap.loading.allowManualLargeFileRefresh` y dispara el refresh manualmente con `GhostMap: Refresh`.

Ver [Settings](/reference/settings).

## ¿Por qué hay tantos "tiers" de lenguajes?

Algunos lenguajes tienen gramáticas que un scanner basado en regex y Tree-sitter cubre completamente (Tier 1). Otros tienen features que requerirían un parser específico real (Tier 2, Tier 3). El [Disclaimer](/legal/disclaimer) detalla los gaps conocidos por lenguaje.

## ¿Cuánto ocupa la extensión?

La descarga es de unos 35 MB, dominados por las 19 gramáticas Tree-sitter en formato WASM. En memoria activa el costo es bajo: solo las gramáticas de los lenguajes que has tocado en la sesión se cargan.

## ¿GhostMap usa IA?

No en V1. Toda la extracción es determinista (LSP / Tree-sitter / regex). La V2 contempla features asistidos por IA (explicaciones automáticas, sugerencias de Range Anchors) pero serán opcionales y se anunciarán explícitamente cuando lleguen.

## ¿Cómo creo un Anchor?

La forma más rápida es escribir `gh` y presionar Tab sobre la línea anterior a un símbolo. El snippet genera un Contextual Anchor que se adjunta al símbolo más cercano. Ver [Primeros 5 minutos](/get-started/primeros-5-minutos) y [Sintaxis](/reference/sintaxis).

## ¿Puedo poner `@ghost` en un comentario de bloque `/* */`?

No en V1. Solo se reconocen comentarios de línea (`//` o `#`). Ver [Sintaxis: solo comentarios de línea](/reference/sintaxis#solo-comentarios-de-línea).

## ¿Hay atajos de teclado por defecto?

Sí, uno: **Ctrl+Alt+G** (**Cmd+Alt+G** en macOS) ejecuta `GhostMap: Refresh` mientras el editor tiene foco. Ver [Atajos de teclado](/keyboard-shortcuts).

## ¿Qué licencia tiene GhostMap V1?

GhostMap V1 se publica como **source-available** bajo la **GhostMap Free Non-Commercial License**: el código es legible y se permite el uso personal, educativo y de evaluación/testing sin costo. El uso comercial, empresarial, en producción o que genere ingresos requiere autorización por escrito (o un futuro flujo de licencia comercial): no está cubierto por esta licencia ni por donaciones. La visión Enterprise queda como roadmap futuro para integraciones de equipo; no es una funcionalidad disponible hoy. Ver los Términos de uso (incluidos en el repositorio como `LICENSE`; consultas a getghostmap@proton.me) y [Roadmap](/roadmap/vision-v2).

## ¿Por qué no aparece GhostMap en VS Code Marketplace u Open VSX todavía?

Hoy GhostMap se instala por **VSIX local** construido desde el repo con `npx @vscode/vsce package`. GitHub Releases queda como canal planificado post-tag; todavía no hay release público.

- **VS Code Marketplace: pendiente.** El paquete todavía no tiene `publisher` configurado en `package.json`; falta dar de alta el publisher en Marketplace y completar el primer `vsce publish`. Mientras tanto, instalar por VSIX es funcionalmente equivalente al Marketplace, solo que sin actualizaciones automáticas dentro del editor.
- **Open VSX: planificado.** Será el puente para usuarios de **VSCodium, Cursor, Gitpod** y demás editores que consumen Open VSX en vez del Marketplace de Microsoft. Pensado para publicarse antes o en paralelo con la aprobación en Marketplace. El script de publicación (`publish:open-vsx`, que invoca `ovsx publish`) ya está preparado en `package.json` del repo `genesis`; falta registrar el namespace en open-vsx.org, generar el token y ejecutar el primer publish.

Mientras esos canales sean ⏳ pendientes / 🧭 planificados, la ruta oficial es la documentada en **[Instalación](/get-started/instalacion)** y **[Instalar desde VSIX](/vsix-install)**.

## ¿Cómo lo desinstalo?

Ver [Cómo desinstalar](/uninstall).

## Siguiente paso

Si tienes un problema específico, escríbenos a **getghostmap@proton.me** con los pasos para reproducirlo.
