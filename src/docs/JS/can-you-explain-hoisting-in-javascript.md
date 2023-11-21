---
title: "Can you explain hoisting in JavaScript?"
description: "Understanding how variable and function declarations are moved to the top."
date: 2023-11-15T11:32:41
category: "JavaScript Fundamentals"
tags: ["Hoisting", "Variables", "Functions"]
urls:
  - label: "JavaScript Hoisting Explained"
    url: "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting"
---
     # Hoisting in JavaScript

## Hoisting Overview

- **Behavior**: Variable and function declarations are moved to the top of their scope during compilation.
- **Implication**: Allows using variables and functions before their actual declarations in the code.

## Variable Hoisting

- **`var` Declarations**: Hoisted to the top of their function or global scope. Only declarations are hoisted, not initializations, leading to `undefined` if accessed before declaration.

```javascript
console.log(x); // undefined, not ReferenceError
var x = 5;
```

- **`let` and `const` Declarations**: Also hoisted but not initialized. Accessing them before declaration causes a `ReferenceError` (known as the "temporal dead zone").

```javascript
console.log(y); // ReferenceError
let y = 5;
```

## Function Hoisting

- **Function Declarations**: Entire declarations are hoisted, enabling calling functions before their code appears.

```javascript
myFunction(); // Works fine, outputs: "Hello!"
function myFunction() {
  console.log('Hello!');
}
```

- **Function Expressions**: Not hoisted. Functions defined in expressions (assigned to `var`, `let`, or `const`) cannot be called before their declaration.

```javascript
myFunc(); // TypeError: myFunc is not a function
var myFunc = function () {
  console.log('Hello!');
};
```

## Class Hoisting

- **Classes**: Both class declarations and expressions (named or unnamed) are hoisted but not initialized. Accessing them before declaration results in a `ReferenceError`.

## Implications

- **Unexpected Behaviors**: Particularly with `var` declarations, can lead to confusion if hoisting is not understood.
- **Code Structuring**: Understanding hoisting aids in predictable code structuring, especially for function and variable declarations.

## Best Practices

- **Declaration Alignment**: Many developers declare functions and variables at the top of their scope to align with hoisting behavior.
- **Modern Features**: Use of `let`, `const`, and arrow functions helps mitigate confusing aspects of hoisting.
