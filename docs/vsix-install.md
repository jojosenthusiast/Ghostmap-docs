---
id: vsix-install
title: Instalar desde un archivo VSIX
sidebar_label: Instalar desde VSIX
---

# Instalar GhostMap desde un archivo VSIX

Hoy el VSIX entregado por contacto directo es el **camino único** de instalación de GhostMap, no solo un fallback. El paquete todavía no está publicado en VS Code Marketplace (falta dar de alta al `publisher`) y Open VSX tiene el script de publicación (`publish:open-vsx`, que invoca `ovsx publish`) ya preparado en `package.json`, pero quedan pendientes el namespace en open-vsx.org, el token y el primer publish. GitHub Releases queda como canal planificado post-tag; todavía no hay release público y el repositorio fuente sigue privado. Mientras tanto, todos los usuarios (incluso quienes están en VS Code estándar) instalan vía VSIX recibido por mail.

Ver el estado de cada canal en **[Instalación → Estado de distribución](/get-started/instalacion)**.

Este archivo también te sirve si más adelante necesitas:

- Instalación **offline** o en una máquina sin acceso a la red.
- **Pinning** a una versión concreta para reproducibilidad.
- Entornos corporativos donde Marketplace/Open VSX están bloqueados.

## Obtener el VSIX

### Opción A (recomendada hoy): pedir el VSIX por mail

Escribí a [getghostmap@proton.me](mailto:getghostmap@proton.me) indicando que querés el paquete de instalación. Te respondemos con el archivo `ghostmap-0.5.0.vsix` listo para instalar.

Este es el camino oficial mientras Marketplace, Open VSX y el repositorio público estén pendientes.

### Opción B: empaquetar desde el código fuente (solo con acceso al repo)

El repositorio `genesis` es privado y el acceso es limitado. Si te otorgaron acceso explícito, podés empaquetarlo vos mismo:

```bash
cd genesis
npm install
npm run compile
npx @vscode/vsce package --out ghostmap.vsix
```

El archivo `ghostmap.vsix` queda en el directorio actual. Si no tenés acceso al repo, usá la Opción A.

### Opción C: descargar un VSIX publicado cuando exista

Cuando exista un release público, el VSIX se anunciará por los canales de distribución oficiales (este documento se actualizará con la URL exacta). Hasta entonces, usá la Opción A.

## Instalar el VSIX

### Desde VS Code (UI)

1. Abre el panel **Extensions** (`Ctrl+Shift+X` / `Cmd+Shift+X`).
2. Click en el menú "..." de la barra superior del panel.
3. **Install from VSIX...**
4. Selecciona el archivo `ghostmap.vsix`.
5. VS Code instala y te pide recargar.

### Desde la línea de comandos

```bash
code --install-extension ghostmap.vsix
```

## Verificar la instalación

Después de recargar VS Code:

1. Abre cualquier archivo de un lenguaje soportado (por ejemplo `.ts`).
2. En la barra lateral izquierda debería aparecer un icono nuevo de fantasma.
3. Click en el icono: el panel **GhostMap** muestra el árbol de símbolos del archivo activo.

Si el panel está vacío y el archivo tiene símbolos, abre la paleta y ejecuta `GhostMap: Refresh`; si sigue vacío, escríbenos a getghostmap@proton.me con la versión de VS Code y el lenguaje del archivo.

## Actualizar a una versión nueva

Repite el proceso con el nuevo VSIX. VS Code detecta que es una nueva versión del mismo extension y la actualiza in-place. No hace falta desinstalar primero.

## Restricciones del modo VSIX

Cuando instalas desde VSIX (que hoy es el modo por defecto):

- VS Code **no** te avisa automáticamente cuando hay una versión nueva. Tienes que comprobar manualmente el repo o, cuando existan releases públicos, la página de GitHub Releases.
- El extension se marca como "side-loaded" y no aparece en tus extensiones sincronizadas si usas Settings Sync.
- En entornos gestionados por IT, puede que la política bloquee instalaciones VSIX. Consulta con tu administrador.

Cuando se publique GhostMap en VS Code Marketplace y Open VSX (ambos están pendientes/planificados: ver [Estado del proyecto](/status/estado-del-proyecto)), los avisos de actualización in-editor y la sincronización de Settings Sync funcionarán de forma estándar.

## Siguiente paso

Continúa con **[Primeros 5 minutos](/get-started/primeros-5-minutos)** para escribir tu primer anchor `@ghost`.
