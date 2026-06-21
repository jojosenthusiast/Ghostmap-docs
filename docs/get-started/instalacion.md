---
id: instalacion
title: Instalación
sidebar_label: Instalación
---

# Instalación

GhostMap es una extensión de Visual Studio Code. No necesitas configurar nada externo: ni servidores, ni cuentas, ni archivos de configuración antes de empezar.

:::note
¿Tienes dudas sobre si GhostMap funcionará en tu máquina o con archivos muy grandes? Consulta [Requisitos mínimos](/get-started/requisitos) antes de instalar.
:::

## Estado de distribución

| Canal | Estado actual | Notas |
| --- | --- | --- |
| **VSIX por contacto directo** | ✅ Disponible | Camino único hoy. Escribí a [getghostmap@proton.me](mailto:getghostmap@proton.me) y te enviamos el paquete `ghostmap-0.5.0.vsix`. Ver [Instalar desde VSIX](/vsix-install). |
| **Compilar el VSIX desde el código fuente** | 🔒 Solo con acceso al repo | El repositorio `genesis` es privado. Si te otorgaron acceso, podés empaquetar localmente con `npx @vscode/vsce package`. No es un camino de auto-servicio público. |
| **VSIX desde GitHub Releases** | 🧭 Planificado post-tag | El repo público aún no está abierto. Los releases futuros podrán adjuntar el VSIX después de crear un tag. |
| **VS Code Marketplace** | ⏳ Preparado, no publicado | El paquete todavía no tiene `publisher` configurado en `package.json`; falta dar de alta al publisher en Marketplace y completar el primer `vsce publish`. Mientras tanto, no hay listado oficial. |
| **Open VSX** (VSCodium, Cursor y otros consumidores de Open VSX) | ⏳ Preparado, no publicado | Será el puente para editores compatibles con Open VSX antes o en paralelo con la aprobación en Marketplace. El script de publicación (`publish:open-vsx`, que invoca `ovsx publish`) ya está preparado en `package.json`; quedan pendientes registrar el namespace en open-vsx.org, generar el token de publicación y ejecutar el primer publish. |

Hasta que Marketplace y Open VSX estén publicados, el camino oficial es el VSIX enviado por contacto directo. GitHub Releases será el canal post-tag cuando el repo público esté abierto.

## Editor

- Visual Studio Code (versión reciente, 1.85 o superior — ver [Requisitos](/get-started/requisitos)).
- Un proyecto en alguno de los 19 lenguajes soportados: JavaScript, TypeScript, JSX, TSX, Python, PHP, Java, C#, Go, Rust, C, C++, Ruby, Dart, Elixir, Groovy, Julia, Objective-C, Scala o Solidity.

Si tu lenguaje no tiene un *language server* activo, GhostMap usa automáticamente el mejor respaldo local disponible. En lenguajes Tier 1 suele conservar buen detalle; en Tier 2 o Tier 3 puede producir un árbol más parcial. Consulta [Requisitos mínimos](/get-started/requisitos#matriz-de-calidad-por-lenguaje) antes de tratar el resultado como fuente única de verdad.

## Pasos (camino actual — VSIX por contacto directo)

1. Escribí a [getghostmap@proton.me](mailto:getghostmap@proton.me) pidiendo el VSIX. Te respondemos con el archivo `ghostmap-0.5.0.vsix`. Más detalle en **[Instalar desde un archivo VSIX](/vsix-install)**.
2. Abre VS Code.
3. Ve a la pestaña **Extensions** (`Ctrl+Shift+X` / `Cmd+Shift+X`).
4. Menú **"..."** arriba a la derecha → **Install from VSIX...** → selecciona el `.vsix` recibido.
5. Recarga VS Code cuando te lo pida.

:::note
El repositorio `genesis` (código fuente) es privado. Clonarlo y empaquetar localmente solo es posible si te otorgaron acceso explícito; no es un camino de auto-servicio.
:::

Alternativa por línea de comandos:

```bash
code --install-extension ghostmap-0.5.0.vsix
```

## Cuando Marketplace y Open VSX estén publicados

Estos pasos quedan documentados para usarse cuando los canales correspondientes se marquen como ✅ arriba. Hoy ambos están preparados pero no publicados:

- **VS Code Marketplace** (preparado, no publicado): abrir Extensions, buscar **GhostMap**, click en Install. El listado todavía no existe; no hay un enlace de Marketplace estable que recomendar.
- **Open VSX** (preparado, no publicado): instalación equivalente en VSCodium / Cursor / Gitpod y demás clientes de Open VSX. El paquete aparecerá listado en `open-vsx.org` cuando el primer `ovsx publish` se ejecute.

## Verifica que quedó instalada

Abre cualquier archivo de código en un lenguaje soportado. En la barra lateral de VS Code debería aparecer un nuevo panel llamado **GhostMap** (icono de fantasma). Si el archivo todavía no tiene anotaciones `@ghost`, el panel se mostrará vacío — es el comportamiento esperado.

## Siguiente paso

Continúa con **[Primeros 5 minutos](/get-started/primeros-5-minutos)** para escribir tu primer `@ghost` y ver el árbol en acción.
