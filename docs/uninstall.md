---
id: uninstall
title: Cómo desinstalar
sidebar_label: Desinstalar
---

# Cómo desinstalar GhostMap

Tres pasos: quitar la extensión, opcionalmente limpiar los settings, opcionalmente borrar el caché de workspaces.

## 1. Quitar la extensión

Desde VS Code:

1. Abre el panel **Extensions** (`Ctrl+Shift+X` / `Cmd+Shift+X`).
2. Busca **GhostMap**.
3. Click en el engranaje, **Uninstall**.

Desde la línea de comandos:

```bash
code --uninstall-extension ghostmap.ghostmap
```

VS Code te pedirá recargar la ventana. Después de eso, el panel y los comandos `GhostMap: *` desaparecen.

## 2. (Opcional) Quitar los settings

VS Code conserva los settings de extensiones desinstaladas en caso de que reinstales. Si quieres limpiarlos:

1. Abre `settings.json` (User o Workspace).
2. Borra cualquier clave que empiece con `"ghostmap."`.

No hay efecto colateral; si reinstalas más tarde, GhostMap usará los valores por defecto.

## 3. (Opcional) Borrar los caches `.ghostmap/`

GhostMap deja un archivo `.ghostmap/ghostmap.json` por workspace que tocaste. Si quieres limpiar todos:

**Cross-platform (Node):**

```bash
# Encuentra y elimina .ghostmap/ recursivamente desde un directorio raíz que contenga tus proyectos.
# Cuidado con el alcance: este comando borra TODOS los .ghostmap que encuentre desde donde lo lances.
node -e "const fs=require('fs'),p=require('path');function walk(d){for(const f of fs.readdirSync(d,{withFileTypes:true})){const x=p.join(d,f.name);if(f.isDirectory()){if(f.name==='.ghostmap'){fs.rmSync(x,{recursive:true,force:true});console.log('deleted',x);}else if(f.name!=='node_modules'&&f.name!=='.git'){walk(x);}}}};walk(process.cwd());"
```

O simplemente en cada workspace, manualmente:

```bash
rm -rf .ghostmap/
```

```powershell
Remove-Item -Recurse -Force .ghostmap\
```

## Lo que NO hace falta tocar

- Las **gramáticas Tree-sitter** ya viven dentro de la carpeta de la extensión (`~/.vscode/extensions/ghostmap.ghostmap-<version>/`). Al desinstalar el extension, VS Code limpia esa carpeta automáticamente.
- No hay variables de entorno, demonios, ni servicios en background. GhostMap solo vive como Extension Host process.

## Reinstalar

Si decides volver, los pasos son los mismos que la primera vez: ver [Instalación](/get-started/instalacion). Tu `.gitignore` y tus settings (si no los borraste) siguen donde estaban.

## ¿Por qué me iría?

Si encontraste un problema, considera mandar un mail a [getghostmap@proton.me](mailto:getghostmap@proton.me) antes de irte. El proyecto está en desarrollo activo y los reports concretos son lo que hace que los gaps se cierren.
