---
title: "What are closures, and how do they work?"
description: "Understanding of scope and closure in JavaScript."
date: 2023-11-15T11:32:41
category: "JavaScript Fundamentals"
tags: ["Closures", "Scope", "Functions"]
urls:
  - label: "MDN - Closures"
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
---
     # Closures in JavaScript

## Closures

- **Definition**: A closure is a function bundled together (enclosed) with references to its surrounding state (lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function.
- **Creation**: Closures are created every time a function is created, at function creation time.

## How They Work

- **Function in a Function**: When you have a function defined inside another function, the inner function has access to the variables and parameters of the outer function (even after the outer function has returned).
- **Lexical Scoping**: Closures are a manifestation of lexical scoping. Functions are executed using the scope chain that was in effect when they were defined, not the scope chain when they are invoked.
- **Retaining State**: Because of closures, an inner function retains access to the outer function’s scope even after the outer function has completed execution. This lets the inner function remember and access variables from the outer function.

## Example

```javascript
function outerFunction() {
  let outerVariable = 100;

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Outputs: 100
```

In this example, `innerFunction` is a closure that encompasses the `outerFunction`'s variable `outerVariable`. Even after `outerFunction` has executed, `myClosure()` can access `outerVariable`.

## Uses of Closures

- **Data privacy**: Closures can create private variables and methods.
- **Functional programming patterns**: like currying.
- **Event handlers and callbacks**: that require state.

**Understanding closures** is crucial for advanced JavaScript programming, particularly in managing scope, building data privacy, and functional programming techniques.

```

```
