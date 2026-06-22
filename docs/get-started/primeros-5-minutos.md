---
id: primeros-5-minutos
title: Primeros 5 minutos
sidebar_label: Primeros 5 minutos
---

# Primeros 5 minutos

Esta guía te lleva de cero a tu primer Ghost Tree funcionando, sin teoría previa. Si después quieres entender el *por qué* de cada pieza, la sección [Guía / Conceptos](/guide/philosophy) lo cubre en detalle.

## Paso 1: Abre cualquier archivo de tu proyecto

El panel **GhostMap** aparece en la barra lateral. Si el archivo no tiene anotaciones todavía, el panel se ve vacío.

## Paso 2: Escribe `gh` y presiona Tab encima de una función o clase

```ts
class PaymentService {

  gh␣ ← (escribe "gh" y presiona Tab aquí)
  charge(amount: number) {
    // ...
  }
}
```

GhostMap detecta que `charge` es el símbolo más cercano y autocompleta:

```ts
class PaymentService {

  // @ghost charge description:  | status: todo
  charge(amount: number) {
    // ...
  }
}
```

## Paso 3: Completa la descripción y guarda

```ts
  // @ghost charge description: falta validar montos negativos | status: todo
  charge(amount: number) {
```

## Paso 4: Mira el panel GhostMap

```text
PaymentService
└── charge        (todo): falta validar montos negativos
```

## Paso 5: Crea tu primer Anchor con nombre propio

Un Anchor con `#nombre` no necesita estar atado a ninguna función: es ideal para notas generales del archivo o del módulo:

```ts
// @ghost #pendientes-pagos description: revisar integración con Stripe v2 | status: review
```

```text
PaymentService
└── charge        (todo): falta validar montos negativos
pendientes-pagos  (review): revisar integración con Stripe v2
```

## Paso 6: Filtra

Haz clic en el ícono de filtro del panel → elige `todo` → solo verás los Ghosts pendientes en todo el proyecto.

## Eso es todo

A partir de aquí, cada `// @ghost ...` que escribas se organiza solo. Para entender las diferencias entre los tres tipos de anotación (Point, Contextual, Range), continúa con **[Guía / Conceptos](/guide/philosophy)** → **[Referencia de sintaxis](/reference/sintaxis)**.
