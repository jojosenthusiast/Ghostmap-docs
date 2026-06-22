---
id: philosophy
title: Filosofía de GhostMap
sidebar_label: Filosofía
---

# Filosofía de GhostMap

## Code-first

La planificación vive junto al código, no en una herramienta externa. Un Ghost no es un ticket que vive en otro lado y que hay que sincronizar manualmente: es una anotación que está físicamente en el archivo que describe.

## Una gramática mínima y agnóstica de lenguaje

`@ghost` es interpretable por humanos, por herramientas y por modelos de IA. No importa si tu proyecto es TypeScript, Python o Rust: la sintaxis es la misma, solo cambia el prefijo de comentario (`//` o `#`).

## El orden correcto: símbolos primero, Ghosts después

Es fácil pensar en GhostMap como "un sistema de Ghosts con código adjunto". Es al revés:

```text
Código
  ↓
Símbolos  (Class, Function, Method, Interface, Struct, Enum)
  ↓
Metadata Ghost (description, status)
  ↓
Árbol (Ghost Tree)
```

Primero existe un mapa de **símbolos** del proyecto (extraído del código real, con o sin anotaciones). Después, la metadata Ghost se adjunta a esos símbolos. Esto es lo que permite que GhostMap entienda la estructura de tu proyecto incluso antes de que empieces a anotar nada.

## Principios de diseño

1. **Code first**: el código es la fuente de verdad.
2. **Minimal syntax**: una gramática simple, sin ceremonia.
3. **Language agnostic**: funciona igual en más de 15 lenguajes.
4. **Fast navigation**: un clic te lleva exactamente al lugar correcto.
5. **Structural understanding**: el árbol refleja la jerarquía real del código.
6. **AI-ready architecture**: la gramática está pensada para ser leída por modelos de IA tan fácilmente como por humanos.
7. **Workspace awareness**: GhostMap entiende el proyecto, no solo el archivo abierto.
8. **Incremental scalability**: funciona igual de bien en un archivo de 50 líneas que en uno de 50,000 (ver [Loading Policy](/architecture/loading-policy)).

## Siguiente paso

Continúa con **[Symbol](/guide/symbol)** para entender la primera capa del modelo: cómo GhostMap extrae los símbolos de tu código.
