---
id: range-anchor
title: Range Anchor
sidebar_label: Range Anchor
---

# Range Anchor

## Definición

Un **Range Anchor** permite delimitar una región completa de código bajo un mismo Anchor.

```ts
// @ghost #refactor-pagos start description: dividir este servicio en 3 | status: todo

class PaymentService {
  charge() {}
  refund() {}
  reconcile() {}
}

// @ghost end
```

```text
refactor-pagos   (todo): dividir este servicio en 3
└── PaymentService
    ├── charge
    ├── refund
    └── reconcile
```

## Reglas de jerarquía (containment)

- Un símbolo que **empieza** dentro del rango de un Range Anchor pertenece a ese anchor, incluso si su cuerpo se extiende más allá de la línea `@ghost end`.
- La jerarquía se construye por **contención de rangos**, no por nombres compuestos: nunca verás algo como `AuthService.login()` como identificador: la relación padre-hijo se expresa directamente en el árbol.

## Importante: el nombre es obligatorio para que se vea

Un `@ghost ... start` **sin** `#nombre` es válido sintácticamente, pero al no tener nombre **no se renderiza como nodo en el árbol**. Si quieres un rango visible en el Ghost Tree, siempre necesitas `#nombre`:

```ts
// ✅ Crea un nodo visible "refactor-pagos"
// @ghost #refactor-pagos start description: ... | status: ...

// ❌ Válido, pero no aparece como nodo en el árbol
// @ghost start description: ... | status: ...
```

## Ejemplo antes / después

**Antes**: un archivo grande, sin estructura, donde un dev nuevo no sabe por dónde empezar ni qué partes están "en obras":

```ts
class PaymentService {
  charge() {}
  refund() {}
  reconcile() {}
  generateInvoice() {}
}
```

```text
PaymentService
├── charge
├── refund
├── reconcile
└── generateInvoice
```

**Después**: con un Range Anchor agrupando el trabajo en curso:

```ts
// @ghost #refactor-pagos start description: dividir este servicio en 3 microservicios | status: in-progress

class PaymentService {
  charge() {}
  refund() {}

  // @ghost description: pendiente mover a billing-service | status: todo
  reconcile() {}

  generateInvoice() {}
}

// @ghost end
```

```text
refactor-pagos        (in-progress): dividir este servicio en 3 microservicios
└── PaymentService
    ├── charge
    ├── refund
    ├── reconcile        (todo): pendiente mover a billing-service
    └── generateInvoice
```

Con un solo vistazo, cualquier dev entiende: este archivo completo está en medio de un refactor, y específicamente `reconcile` es lo siguiente que hay que mover.

**Caso de uso típico:** refactors grandes, migraciones de módulos, o "zonas calientes" del código que requieren contexto adicional antes de tocarlas.

## Siguiente paso

Continúa con **[Ownership Radius](/guide/ownership-radius)** para entender cómo GhostMap decide a qué símbolo se pega un Contextual Anchor.
