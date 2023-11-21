---
title: "How do you create and use an IIFE (Immediately Invoked Function Expression)?"
description: "Explanation of creating and using an IIFE in JavaScript."
date: 2023-11-15T11:32:41
category: "JavaScript Fundamentals"
tags: ["functions", "IIFE", "patterns"]
urls:
  - label: "MDN Documentation on IIFE"
    url: "https://developer.mozilla.org/en-US/docs/Glossary/IIFE"
---
     # IIFE (Immediately Invoked Function Expression) in JavaScript

## Overview

- **Purpose**: An IIFE is used to run a function as soon as it's defined, useful for encapsulating variables and functions.
- **Scope Management**: Helps in preventing global scope pollution, beneficial in modular application design.

## Creating an IIFE

### Define the Function

- **Method**: Can be a function declaration or expression.

### Enclose in Parentheses

- **Conversion**: Wrapping the function in parentheses turns it into an expression that can be executed immediately.

### Invoke Immediately

- **Execution**: Add another set of parentheses after the function to invoke it immediately.

## Basic Syntax

```javascript
(function () {
  // Code goes here
})();
```

### Arrow Function Variation

```javascript
(() => {
  // Code goes here
})();
```

## Using an IIFE

### Variable Encapsulation

- **Scope Isolation**: Variables inside an IIFE are not visible outside, avoiding global scope pollution.

### Immediately Executed Logic

- **Use Case**: Ideal for code that needs to run right away without affecting the global scope.

### Parameters

- **Argument Passing**: Arguments can be passed to an IIFE like a regular function.

## Example with Parameters

```javascript
(function (x, y) {
  console.log(x + y); // Outputs: 30
})(10, 20);
```

- **Execution**: In this example, the IIFE is executed immediately with arguments 10 and 20.

## Contextual Significance

- **Historical Popularity**: Especially prevalent before block-scoped variables (let, const) and modules.
- **Current Relevance**: Still useful in scenarios where newer features aren't applicable or preferred.
