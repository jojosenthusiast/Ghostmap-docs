---
id: requisitos
title: Requisitos mínimos
sidebar_label: Requisitos mínimos
---

# Requisitos mínimos

GhostMap es una extensión de VS Code. No requiere configuración de servidor, cuenta externa, ni dependencias del sistema fuera del editor.

## Editor

| Requisito | Valor |
|---|---|
| Visual Studio Code | **1.85 o superior** (declarado en `engines.vscode` del manifiesto). VS Code te avisará si tu versión es anterior. |
| Sistema operativo | Windows, macOS, Linux. Cualquier plataforma donde corra VS Code. |

GhostMap está pensado para **VS Code Desktop**. VS Code Web (`vscode.dev` / `github.dev`) y entornos remotos pueden restringir el filesystem, el Extension Host o las extensiones instaladas; en V1 no se documentan como superficie verificada. Si usas Remote SSH, Dev Containers, WSL o Codespaces, valida el comportamiento en tu entorno antes de depender de GhostMap para trabajo crítico.

> **Nota:**
> GhostMap fue desarrollado y probado principalmente en Windows. Las rutas de archivos usan `path.sep` para compatibilidad cross-platform, pero macOS y Linux no han sido verificados de forma exhaustiva en V1. Si encuentras un problema específico de plataforma, escríbenos a [getghostmap@proton.me](mailto:getghostmap@proton.me).

## Lenguaje del proyecto

No necesitas instalar nada extra solo para usar GhostMap. La extensión incluye:

- **19 gramáticas Tree-sitter compiladas a WASM**, empaquetadas dentro de la extensión. No se descargan en tiempo de ejecución.
- **Regex fallback**, que funciona sin ninguna dependencia externa.

La única dependencia opcional que mejora la calidad del árbol es tener activo un **language server (LSP)** para tu lenguaje. GhostMap lo usa automáticamente si está disponible; si no lo está, cae al siguiente nivel de extracción sin que tengas que hacer nada.

## Matriz de calidad por lenguaje

| Tier | Qué puedes esperar | Lenguajes |
|---|---|---|
| **Tier 1: first-class** | Extracción de símbolos y nesting completo en los fixtures actuales. Es el nivel recomendado para evaluar GhostMap. | TypeScript, TSX, JavaScript, JSX, Python, Rust, C#, Java, C++, C, PHP, Ruby, Dart |
| **Tier 2: best-effort** | Símbolos principales disponibles; el nesting o algunos constructos pueden ser parciales según el archivo. | Go, Groovy, Objective-C |
| **Tier 3: top-level only** | Índice grueso útil para orientación básica; el nesting profundo no debe asumirse como confiable. | Scala, Solidity, Julia, Elixir |

Si tu lenguaje cae en Tier 2 o Tier 3, el fallback sigue intentando darte un árbol útil, pero la precisión esperada es menor que en Tier 1. Para flujos críticos, verifica el resultado contra el archivo antes de usarlo como fuente única de verdad.

> **Expansión de lenguajes: workstream separado:**
> Hay aproximadamente 20 lenguajes adicionales planificados (Kotlin, Swift, Haskell, OCaml, Lua, R, Bash, familia SQL, …). Son un workstream aparte, bloqueado por:
>
> - empaquetado de las gramáticas Tree-sitter y procedencia reproducible de los WASM,
> - validez de los queries que escribimos o forkeamos contra la versión exacta de la gramática,
> - cobertura de fixtures por lenguaje en `test/matrix/`,
> - y, en algunos casos, PRs upstream a las propias gramáticas.
>
> Esos lenguajes **no** se anuncian como soportados hasta cumplir ese gate. Si el ítem que abres está en uno de ellos, GhostMap se comportará igual que en un lenguaje desconocido (no aparecerá árbol de símbolos). Ver [Disclaimer](/legal/disclaimer).

## RAM y CPU

GhostMap no tiene un requisito de RAM mínima documentado. Sin embargo, hay comportamientos a tener en cuenta en entornos con poca memoria:

- Con **80–90% de RAM en uso**, el arranque de un language server puede tardar entre 5 y 30 segundos. GhostMap espera hasta 800 ms y luego cae al fallback automáticamente. El árbol sigue apareciendo, pero sin el detalle que daría el LSP.
- En esas condiciones, el **Ghost Index** es especialmente útil: en lugar de esperar al LSP en cada apertura, el árbol carga desde el snapshot local en menos de 50 ms.

## Proyectos muy grandes

GhostMap analiza archivos, no workspaces completos. Para archivos muy grandes hay límites automáticos:

| Límite | Valor por defecto | Setting para ajustarlo |
|---|---|---|
| Líneas por archivo (auto-refresh) | 60,000 líneas | `ghostmap.loading.maxAutoLines` |
| Tamaño por archivo (auto-refresh) | 10 MB | `ghostmap.loading.maxAutoBytes` |
| Archivos "tiny" (sin backpressure) | ≤ 50 líneas | `ghostmap.loading.tinyLineThreshold` |

Si trabajas habitualmente con archivos que superan estos límites, puedes subirlos en `settings.json`. Consulta [Settings](/reference/settings) y [Loading Policy](/architecture/loading-policy) para el detalle.

## Resumen rápido

Si VS Code 1.85 o superior corre en tu máquina, GhostMap corre en tu máquina. Los límites de rendimiento aparecen con archivos muy grandes o bajo presión de RAM extrema, no en uso normal.
