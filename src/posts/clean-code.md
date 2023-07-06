---
title: Clean Code
date: 2019-03-28
tags:
  - programming
---

<!-- vim-markdown-toc GFM -->

* [Naming](#naming)
* [Comments](#comments)
* [Formatting](#formatting)
* [Functions](#functions)
  * [Level of abstraction](#level-of-abstraction)
  * [Don't split if...](#dont-split-if)
  * [Side effects](#side-effects)
  * [Unit test](#unit-test)
* [Control Structures & Errors](#control-structures--errors)
  * [Guards](#guards)
  * [Use error handling](#use-error-handling)
  * [Factory Functions](#factory-functions)
* [OOP](#oop)
  * [Object vs data structure](#object-vs-data-structure)
  * [Polymorphism](#polymorphism)
  * [Cohesion](#cohesion)
  * [Law of Demeter](#law-of-demeter)
  * [SOLID principle](#solid-principle)
    * [Single responsibility](#single-responsibility)
    * [Open-closed](#open-closed)
    * [Liskov substitution](#liskov-substitution)
    * [Interface segregation](#interface-segregation)
    * [Dependence inversion](#dependence-inversion)

<!-- vim-markdown-toc -->

# Naming

Variables: userData, isValid. Don't use verbs.
Functions: sendData(), inputIsValid()
Classes: User, RequestBody

Be specific:

- `authenticatedUser` is clearer than `user`
- `saveUser` vs. `save`
- `datePublished` vs `date`

The name should tell reader what the code is doing without delving into each line of code.

Use 'DateUtility' or 'DateUtil' for a class of helper methods, i.e. static methods.

Don't use redundant names like 'userWithNameAndAge'.

Use **distinct names**. `getDailyData` and `getDayData` won't tell reader the difference without delving into the code. Distinguish them with `getDailyReport` and `getDataForToday`.

# Comments

Avoid comments if you're using good naming.

Don't use obvious separator comments like `/*** variables ***/`. Separate the code to different file.

Good comments:

- Explaining codes that can't be replaced with good naming. E.g. regex patterns
- Warnings
- TODO
- Documentation strings

# Formatting

Your code must be readable like an essay.

Split concepts into individual files. Use 1 class per file.

Keep related concepts close to each other.

Reduce horizontal length by defining new variables.

# Functions

Two parameters or less is the best.

Avoid boolean parameters like `log('Hi there!', false)`. Create another function that's easier to understand.

Use object parameter to reduce number of parameters. E.g. `createUser(userData: Object)`.

For dynamic number of parameters, use `sum(...numbers)` which can be called with `sum(1, -3, 5)`

Try to avoid functions that modifies the parameter and output it. It's prone to bugs and [Dside effects](#side-effects).

Object-oriented programming (OOP) is best for cleaner code. Consider a function to add `id` to `user`. `user.addId()` is clearer than `addId(user)`.

Reduce the distance between the function name and the main body.

**Function should be small and do one level of abstraction**.

## Level of abstraction

Function should do work that's one level of abstraction below.

High level: Easy to read and leaves no room for interpretation. E.g. `isEmail(email)`
Low level: Requires user to interpret. E.g. `email.includes(@)`

```
function createUser(email, password) {
  validateUser(email, password)

  saveUser(email, password)
}
```

## Don't split if...

1. It's harder to find the extracted function
2. You can't come up with a name for the function
3. Can be rewritten with OOP.

## Side effects

`console.log` in children functions is also a side effect. E.g:

```
function isValid(email) {
  if (!email.includes('@')) {
    console.log("Email doesn't include @") // side effect
    return false
  } else {
    return true
  }
}
```

## Unit test

Unit testing helps to determine if functions can be extracted.

# Control Structures & Errors

These are some strategies to reduce deeply nested codes:

## Guards

Any `else` in an `if else` block can be replaced with a guard.

Fail fast with guard, e.g. `if (!email.includes('@')) return`.

Refactor guards into their own function, e.g. `emailIsValid()`

Prefer positive checks (`isEmpty` is better than `isNotEmpty`)

## Use error handling

Throw error instead of returning. Then catch errors in the calling function with a `try/catch` block.

```
const error = new Error('Invalid input')
error.code = 422 // extra data
throw error
```

## Factory Functions

Factory function is a function that produces an object.

You can point to a function without bracket so it'll not call it immediately, i.e. `bark` instead of `bark()`. The calling function can call that function later.

```
// Global constants is less prone to error than typing the same string in your codes.
const TYPE_CREDIT_CARD = 'CREDIT_CARD'

function processTransaction(transaction) {
  const processors = getTrasactionProcessor(transaction)

  isPayment(transaction) ? processors.processPayment(transaction) : processors.processRefund(transaction)
}

// factory function
function getTransactionProcessor(transaction) {
  let processors = {
    processPayment: null,
    processRefund: nulll
  }

  if (transaction === TYPE_CREDIT_CARD) {
    processors.processPayment = processCreditCardPayment
    processors.processRefund = processCreditCardRefund
  } else if ... {
  }
}

function processCreditCardPayment() {...}
function processCreditCardRefund() {...}
function isPayment(transaction) {...}
```

# OOP

Classes should have a **single responsibility**. A 'Product' class should only modify product-related info.

## Object vs data structure

Don't mix private and public properties in a class. It's prone to bugs.

An 'object' is your typical OOP object. It has private properties with public methods.
A 'data container' or 'data structure' has public properties with no methods. We use this to store and transport data.

## Polymorphism

```
type Purchase = any

let Logistics: any

interface Delivery {
  deliverProduct()
  trackProduct()
}

class DeliveryImplementation {
  protected purchase: Purchase

  constructor(purchase: Purchase) {
    this.purchase = purchase
  }
}

class ExpressDelivery extends DeliveryImplementation implements Delivery {
  deliverProduct() {
    Logistics.issueExpressDelivery(this.purchase.product)
  }
}

class InsuredDelivery extends DeliveryImplementation implements Delivery {
  deliverProduct() {
    Logistics.issueInsuredDelivery(this.purchase.product)
  }
}

// Insert if/else logic to create the correct class
const delivery = new InsuredDelivery({})
```

## Cohesion

Are your class methods using the class properties a lot? Your class is highly cohesive.

## Law of Demeter

Avoid code like `this.customer.lastPurchase.date`.

You're assuming the `lastPurchase` object has a `date` field.

Don't depend on other objects that isn't obvious in your class.

Only use this in data containers.

**Tell, don't ask.** Don't ask for information to use it. Tell other classes what to do.

```
class Customer {
  lastPurchase: any

  constructor(customer, warehouse) {
    this.customer = customer
    this.warehouse = warehouse
  }

  deliverLastPurchase() {
    // const date = this.customer.lastPurchase.date // BAD
    const date = this.customer.lastPurchase.date

    // this.warehouse.deliverPurchasesByDate(this.customer, date) // BAD: ask for information,
    this.warehouse.deliverPurchase(this.customer.lastPurchase) // GOOD: tell what to do.
  }
}
```

## SOLID principle

### Single responsibility

### Open-closed

A class should be **open for extension, closed for modification**.

It's bad if we keep returning to a class to add new functions. E.g.:

```
class Printer {
  printPDF() {...}
  printWebpage() {...}
  // BAD: add more to print different format
}
```

It's better to extend the class:

```
interface Printer {
  print()
}

class PrinterImplementation {
  ...
}

class PDFPrinter extends PrinterImplementation implements Printer {
  print() {...}
}

class WebPrinter extends PrinterImplementation implements Printer {
  print() {...}
}
```

### Liskov substitution

Ensure your base class methods can apply to all derived class. E.g.

```
class Bird {
  fly() {...}
}

class Penguin extends Bird {
  // Can't fly. Solution: Create a new FlyingBird class
}
```

### Interface segregation

```
interface Mammal {}

interface AnimalsThatLayEggs {}

class Platypus implements Mammal, AnimalsThatLayEggs {}
```

### Dependence inversion

Don't put if/else logic in constructor to instantiate the correct class. Bad example:

```
class App {
  private database: SQLDatabase | InMemoryDatabase

  constructor(database: SQLDatabase | InMemoryDatabase) {
    if (database instanceof SQLDatabase) {
    ...
    }
  }
}
```

Have the logic of determining the correct class outside of the class.

```
class App {
  private database: Database
  ...
}

const sqlDatabase = new SQLDatabase()
const app = new App(sqlDatabase)
```
