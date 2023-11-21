---
title: "Explain the difference between `var`, `let`, and `const`."
description: "Understanding of variable scope and ES6 features."
date: 2023-11-15T11:32:41
category: "JavaScript Fundamentals"
tags: ["var", "let", "const", "ES6"]
urls:
  - label: "MDN - var"
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var"
  - label: "MDN - let"
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let"
  - label: "MDN - const"
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"
---
     # Differences between var, let, and const in JavaScript

## var

- **Scope**: Function scope. Variables declared with var are scoped to the nearest function block (or globally if outside a function block).
- **Hoisting**: Variables are hoisted to the top of their scope, but only the declaration, not the initialization. They can be used before they are declared but will have an undefined value until their actual declaration is reached.
- **Reassignment**: Allows re-declaration and reassignment within its scope.

## let

- **Scope**: Block scope. Variables declared with let are scoped to the nearest enclosing block (e.g., if, while block), not just to function blocks.
- **Hoisting**: Variables are hoisted to the top of their block scope but are not initialized. Accessing them before the declaration results in a ReferenceError (Temporal Dead Zone).
- **Reassignment**: Allows reassignment but not re-declaration within its scope.

## const

- **Scope**: Block scope, similar to let.
- **Hoisting**: Like let, const declarations are hoisted to the top of their block scope but are not initialized, leading to a ReferenceError if accessed before declaration.
- **Reassignment**: Does not allow re-declaration or reassignment. The variable must be initialized at the time of declaration. Contents of objects and arrays can be modified, but the variable cannot be reassigned.

## Key Differences

- **Scope**: var has function scope, while let and const have block scope.
- **Hoisting**: var declarations are hoisted with undefined initialization; let and const are hoisted but not initialized, causing a ReferenceError when accessed before declaration.
- **Reassignment and Re-declaration**: var allows both reassignment and re-declaration. let allows reassignment but not re-declaration in the same scope. const allows neither reassignment nor re-declaration.

**Understanding these differences** is crucial for writing robust and error-free JavaScript code, especially in managing scope and avoiding unintentional variable overwrites or reference errors.
