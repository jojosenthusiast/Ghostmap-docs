---
id: diagnostics
title: Ghost Diagnostics
sidebar_label: Diagnostics
---

# Ghost Diagnostics

GhostMap muestra advertencias e información directamente en el editor cuando detecta anotaciones malformadas o ambiguas.

## Tabla de diagnósticos

| Código | Severidad | Cuándo aparece |
|---|---|---|
| `ghost-unclosed-range` | Warning | Un `@ghost #nombre start` nunca recibió su `@ghost end` correspondiente. Se degrada a Point Anchor (no arrastra símbolos posteriores como hijos). |
| `ghost-unexpected-end` | Warning | Existe un `@ghost end` sin apertura (`start`) previa. |
| `ghost-malformed-syntax` | Warning | Sintaxis híbrida no reconocida tras `@ghost` (ver [Reglas gramaticales](/reference/sintaxis#45-reglas-gramaticales-y-errores-comunes)). Incluye sugerencia de los dos quick fixes correspondientes. |
| `ghost-detached-symbol` | Information | Un Contextual Anchor no encontró ningún símbolo dentro del radio de ownership. |
| `ghost-ambiguous-ownership` | Information | Un Contextual Anchor tiene múltiples símbolos candidatos igual de cercanos; se listan los nombres. |

## Code Actions disponibles

- **"Add @ghost annotation"**: sobre una línea `function`/`class` sin anotación previa, inserta una línea `// @ghost description:  | status: todo` justo arriba.
- **"Convert to semantic anchor: @ghost #token"** / **"Convert to contextual anchor: @ghost description: …"**: sobre sintaxis híbrida malformada.
- **Fix de clave mal escrita** (`statu:` → `status:`) cuando la clave contiene "stat"/"statu" pero no es exactamente `status` o `description`.
- **Fix de valor de status inválido**: sugiere el status soportado más parecido (por prefijo) o `todo`.
- **"Add #anchor name"**: sobre una línea `@ghost` sin `#`, `start` ni `end` que no es el anchor más cercano a ningún símbolo, sugiere agregar `#name`.

## Siguiente paso

Continúa con **[Settings](/reference/settings)** para ajustar el comportamiento de GhostMap a tu proyecto.
