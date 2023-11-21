const data = [
  {
    question: "Explain Event Bubbling and Event Capturing.",
    shortDescription: "Discuss the concept of event propagation in the DOM.",
    category: "JavaScript Fundamentals",
    tags: ["DOM", "Events", "Bubbling", "Capturing"],
    markupFilePath: "/questions/EventBubblingCapturing.md",
    mdnUrls: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events",
        label: "MDN - Events",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles",
        label: "MDN - Event Bubbles",
      },
    ],
    slug: "explain-event-bubbling-capturing",
  },
  {
    question: "What are closures, and how do they work?",
    shortDescription: "Understanding of scope and closure in JavaScript.",
    category: "JavaScript Fundamentals",
    tags: ["Closures", "Scope", "Functions"],
    markupFilePath: "/questions/Closures.md",
    mdnUrls: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
        label: "MDN - Closures",
      },
    ],
    slug: "what-are-closures-how-work",
  },
  {
    question: "Explain the difference between `var`, `let`, and `const`.",
    shortDescription: "Understanding of variable scope and ES6 features.",
    category: "JavaScript Fundamentals",
    tags: ["var", "let", "const", "ES6"],
    markupFilePath: "/questions/VarLetConst.md",
    mdnUrls: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var",
        label: "MDN - var",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let",
        label: "MDN - let",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const",
        label: "MDN - const",
      },
    ],
    slug: "explain-difference-var-let-const",
  },

  {
    question: "What is the prototype chain?",
    shortDescription:
      "Understanding prototype-based inheritance in JavaScript.",
    category: "JavaScript Fundamentals",
    tags: ["Prototype", "Inheritance", "Objects"],
    slug: "what-is-the-prototype-chain",
    markupFilePath: "/questions/PrototypeChain.md",
    mdnUrls: [
      {
        label: "Inheritance and the Prototype Chain",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",
      },
    ],
  },
  {
    question: "How does `this` keyword work in JavaScript?",
    shortDescription:
      "Discuss different contexts like global, function, and object.",
    category: "JavaScript Fundamentals",
    tags: ["this", "Context", "Function", "Object"],
    slug: "how-does-this-keyword-work-in-javascript",
    markupFilePath: "/questions/ThisKeyword.md",
    mdnUrls: [
      {
        label: "Understanding the `this` Keyword",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this",
      },
    ],
  },
  {
    question: "What are Promises and how do they work?",
    shortDescription: "This is key for understanding asynchronous operations.",
    category: "JavaScript Fundamentals",
    tags: ["Promises", "Asynchronous", "JavaScript"],
    slug: "what-are-promises-and-how-do-they-work",
    markupFilePath: "/questions/Promises.md",
    mdnUrls: [
      {
        label: "JavaScript Promises",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
      },
    ],
  },

  {
    question: "Can you explain hoisting in JavaScript?",
    shortDescription:
      "Understanding how variable and function declarations are moved to the top.",
    category: "JavaScript Fundamentals",
    tags: ["Hoisting", "Variables", "Functions"],
    slug: "can-you-explain-hoisting-in-javascript",
    markupFilePath: "/questions/Hoisting.md",
    mdnUrls: [
      {
        label: "JavaScript Hoisting Explained",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting",
      },
    ],
  },
  {
    question: "What is the event loop and how does it work?",
    shortDescription:
      "Discussing the execution model of JavaScript, especially in the context of asynchronous programming.",
    category: "JavaScript Fundamentals",
    tags: ["Event Loop", "Asynchronous", "Execution Model"],
    slug: "what-is-the-event-loop-and-how-does-it-work",
    markupFilePath: "/questions/EventLoop.md",
    mdnUrls: [
      {
        label: "Understanding the Event Loop",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop",
      },
    ],
  },
  {
    question: "Implement a function to check if a string is a palindrome.",
    shortDescription:
      "Coding question to test string manipulation and algorithm skills.",
    category: "Coding Questions",
    tags: ["Palindrome", "Strings", "Algorithms"],
    slug: "implement-a-function-to-check-if-a-string-is-a-palindrome",
    markupFilePath: "/questions/PalindromeCheck.md",
    mdnUrls: [], // No change as the array is empty.
  },

  {
    question: "Write a function to perform deep cloning of an object.",
    shortDescription:
      "Understanding object manipulation and cloning techniques in JavaScript.",
    category: "Coding Questions",
    tags: ["Deep Clone", "Objects", "JavaScript"],
    slug: "write-a-function-to-perform-deep-cloning-of-an-object",
    markupFilePath: "/questions/DeepCloning.md",
    mdnUrls: [], // No change as the array is empty.
  },
  {
    question: "How would you implement debouncing or throttling?",
    shortDescription:
      "Often relates to performance optimization in event handling.",
    category: "Coding Questions",
    tags: ["Debouncing", "Throttling", "Performance"],
    slug: "how-would-you-implement-debouncing-or-throttling",
    markupFilePath: "/questions/DebouncingThrottling.md",
    mdnUrls: [], // No change as the array is empty.
  },
  {
    question: "Create a simple function to merge two sorted arrays.",
    shortDescription:
      "Implementing a function to combine two sorted arrays into one.",
    category: "Coding Questions",
    tags: ["Arrays", "Sorting", "JavaScript Functions"],
    slug: "create-a-simple-function-to-merge-two-sorted-arrays",
    markupFilePath: "/questions/MergeSortedArrays.md",
    mdnUrls: [
      {
        label: "JavaScript Array Reference",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
      },
    ],
  },

  {
    question: "Explain the virtual DOM.",
    shortDescription:
      "Understanding the concept of virtual DOM, especially in React.",
    category: "Frameworks and Libraries",
    tags: ["React", "Virtual DOM", "JavaScript Frameworks"],
    slug: "explain-the-virtual-dom",
    markupFilePath: "/questions/VirtualDOM.md",
    mdnUrls: [
      {
        label: "Virtual DOM and Internals",
        url: "https://reactjs.org/docs/faq-internals.html",
      },
    ],
  },
  {
    question: "What are the lifecycle methods in React?",
    shortDescription: "Overview of React component lifecycle methods.",
    category: "Frameworks and Libraries",
    tags: ["React", "Component Lifecycle", "React Methods"],
    slug: "what-are-the-lifecycle-methods-in-react",
    markupFilePath: "/questions/ReactLifecycleMethods.md",
    mdnUrls: [
      {
        label: "React Component Lifecycle Methods",
        url: "https://reactjs.org/docs/react-component.html",
      },
    ],
  },
  {
    question: "How do you manage state in a React application?",
    shortDescription:
      "Discussion on state management in React using useState, useReducer, or Redux.",
    category: "Frameworks and Libraries",
    tags: ["React", "State Management", "useState", "useReducer", "Redux"],
    slug: "how-do-you-manage-state-in-a-react-application",
    markupFilePath: "/questions/ReactStateManagement.md",
    mdnUrls: [
      {
        label: "Using the State Hook",
        url: "https://reactjs.org/docs/hooks-state.html",
      },
      {
        label: "useReducer Hook",
        url: "https://reactjs.org/docs/hooks-reference.html#usereducer",
      },
      {
        label: "Getting Started with Redux",
        url: "https://redux.js.org/introduction/getting-started",
      },
    ],
  },

  {
    question: "What are hooks in React?",
    shortDescription:
      "Understanding useState, useEffect, and custom hooks in React.",
    category: "Frameworks and Libraries",
    tags: ["React", "Hooks", "useState", "useEffect", "Custom Hooks"],
    slug: "what-are-hooks-in-react",
    markupFilePath: "/questions/ReactHooks.md",
    mdnUrls: [
      {
        label: "Introduction to React Hooks",
        url: "https://reactjs.org/docs/hooks-intro.html",
      },
    ],
  },
  {
    question:
      "Explain the difference between a controlled and an uncontrolled component in React.",
    shortDescription:
      "Distinguishing controlled components from uncontrolled components in React.",
    category: "Frameworks and Libraries",
    tags: ["React", "Controlled Components", "Uncontrolled Components"],
    slug: "explain-the-difference-between-a-controlled-and-an-uncontrolled-component-in-react",
    markupFilePath: "/questions/ControlledUncontrolledReactComponents.md",
    mdnUrls: [
      {
        label: "Controlled Components in React",
        url: "https://reactjs.org/docs/forms.html#controlled-components",
      },
      {
        label: "Uncontrolled Components in React",
        url: "https://reactjs.org/docs/uncontrolled-components.html",
      },
    ],
  },
  {
    question:
      "What are Service Workers and how do they contribute to web applications?",
    shortDescription:
      "Understanding the role and functionality of Service Workers in web applications.",
    category: "Web Technologies and Performance",
    tags: ["Service Workers", "Web Applications", "Offline Capabilities"],
    slug: "what-are-service-workers-and-how-do-they-contribute-to-web-applications",
    markupFilePath: "/questions/ServiceWorkers.md",
    mdnUrls: [
      {
        label: "Service Worker API",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API",
      },
    ],
  },

  {
    question: "Explain how you would optimize a web application's performance.",
    shortDescription:
      "Strategies and techniques for enhancing the performance of web applications.",
    category: "Web Technologies and Performance",
    tags: ["Performance Optimization", "Web Applications", "Best Practices"],
    slug: "explain-how-you-would-optimize-a-web-applications-performance",
    markupFilePath: "/questions/WebAppPerformanceOptimization.md",
    mdnUrls: [
      {
        label: "Web Performance",
        url: "https://developer.mozilla.org/en-US/docs/Web/Performance",
      },
    ],
  },
  {
    question:
      "What is the difference between Local Storage, Session Storage, and Cookies?",
    shortDescription:
      "Comparing Local Storage, Session Storage, and Cookies in web development.",
    category: "Web Technologies and Performance",
    tags: ["Local Storage", "Session Storage", "Cookies", "Web Storage"],
    slug: "what-is-the-difference-between-local-storage-session-storage-and-cookies",
    markupFilePath: "/questions/StorageComparison.md",
    mdnUrls: [
      {
        label: "Local Storage",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
      },
      {
        label: "Session Storage",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage",
      },
      {
        label: "Cookies",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",
      },
    ],
  },
  {
    question:
      "What are WebSockets and how are they different from HTTP requests?",
    shortDescription:
      "Understanding WebSockets and their differences from traditional HTTP requests.",
    category: "Web Technologies and Performance",
    tags: ["WebSockets", "HTTP", "Real-time Communication"],
    slug: "what-are-websockets-and-how-are-they-different-from-http-requests",
    markupFilePath: "/questions/WebSocketsVsHTTP.md",
    mdnUrls: [
      {
        label: "WebSockets API",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
      },
      {
        label: "HTTP",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
      },
    ],
  },
  {
    question:
      "Describe a challenging problem you solved in a project. Focus on your approach and problem-solving skills.",
    shortDescription:
      "Discussing a complex problem tackled in a project and the approach used to solve it.",
    category: "Soft Skills and Problem-Solving",
    tags: ["Problem Solving", "Project Experience", "Decision Making"],
    slug: "describe-a-challenging-problem-you-solved-in-a-project",
    markupFilePath: "/questions/ChallengingProblemSolved.md",
    mdnUrls: [], // No change as the array is empty.
  },
  {
    question:
      "How do you stay updated with the latest front-end technologies and trends?",
    shortDescription:
      "Exploring methods and practices for staying current with front-end development trends.",
    category: "Soft Skills and Problem-Solving",
    tags: ["Front-End Development", "Learning", "Technology Trends"],
    slug: "how-do-you-stay-updated-with-the-latest-front-end-technologies-and-trends",
    markupFilePath: "/questions/StayingUpdatedFrontEnd.md",
    mdnUrls: [], // No change as the array is empty.
  },
  {
    question:
      "Explain a situation where you had to make a technical decision that involved trade-offs.",
    shortDescription:
      "Discussion on making technical decisions and handling trade-offs in development projects.",
    category: "Soft Skills and Problem-Solving",
    tags: ["Technical Decision Making", "Trade-offs", "Problem Solving"],
    slug: "explain-a-situation-where-you-had-to-make-a-technical-decision-that-involved-trade-offs",
    markupFilePath: "/questions/TechnicalDecisionTradeOffs.md",
    mdnUrls: [], // No change as the array is empty.
  },
  {
    question: "What are data types in JavaScript?",
    shortDescription:
      "Discussion of primitive types and object types in JavaScript.",
    category: "JavaScript Fundamentals",
    tags: ["data types", "primitive types", "object types", "JavaScript"],
    slug: "javascript-data-types",
    markupFilePath: "topics/DataTypes.md",
    mdnUrls: [
      {
        label: "MDN Documentation on Data Types",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures",
      },
    ],
  },
  {
    question: "Explain the difference between == and === in JavaScript.",
    shortDescription:
      "This topic covers coercion and type checking in JavaScript comparison operators.",
    category: "JavaScript Fundamentals",
    tags: ["== vs ===", "type coercion", "type checking", "JavaScript"],
    slug: "javascript-equality-operators",
    markupFilePath: "topics/EqualityOperators.md",
    mdnUrls: [
      {
        label: "MDN Documentation on Equality Comparisons",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness",
      },
    ],
  },
  {
    question: "What are template literals in JavaScript?",
    shortDescription:
      "This topic discusses the use of backticks and expression interpolation in JavaScript.",
    category: "JavaScript Fundamentals",
    tags: [
      "template literals",
      "backticks",
      "expression interpolation",
      "JavaScript",
    ],
    slug: "javascript-template-literals",
    markupFilePath: "topics/TemplateLiterals.md",
    mdnUrls: [
      {
        label: "MDN Documentation on Template Literals",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals",
      },
    ],
  },

  {
    question:
      "How do you create and use an IIFE (Immediately Invoked Function Expression)?",
    shortDescription:
      "Explanation of creating and using an IIFE in JavaScript.",
    category: "JavaScript Fundamentals",
    tags: ["functions", "IIFE", "patterns"],
    slug: "create-use-iife",
    markupFilePath: "/path/to/ImmediatelyInvokedFunctionExpression.md",
    mdnUrls: [
      {
        label: "MDN Documentation on IIFE",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/IIFE",
      },
    ],
  },
  {
    question:
      "Explain the use of arrow functions. How do they differ from traditional functions, especially in terms of this binding?",
    shortDescription:
      "Differences between arrow functions and traditional functions in JavaScript, focusing on 'this' binding.",
    category: "JavaScript Fundamentals",
    tags: ["functions", "arrow functions", "this binding"],
    slug: "arrow-functions-vs-traditional",
    markupFilePath: "/path/to/ArrowFunctions.md",
    mdnUrls: [
      {
        label: "MDN Documentation on Arrow Functions",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
      },
    ],
  },
  {
    question:
      "What are higher-order functions in JavaScript? Provide examples, like map, filter, and reduce.",
    shortDescription:
      "Explanation of higher-order functions in JavaScript with examples.",
    category: "JavaScript Fundamentals",
    tags: ["functions", "higher-order functions", "examples"],
    slug: "higher-order-functions-examples",
    markupFilePath: "/path/to/HigherOrderFunctions.md",
    mdnUrls: [
      {
        label: "MDN Documentation on Higher-Order Functions",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Higher-order_function",
      },
      {
        label: "MDN Documentation on Map",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
      },
      {
        label: "MDN Documentation on Filter",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
      },
      {
        label: "MDN Documentation on Reduce",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
      },
    ],
  },
  {
    question:
      "What is the NaN property in JavaScript? How do you test if a value is NaN?",
    shortDescription:
      "Understanding and testing for NaN (Not-a-Number) in JavaScript.",
    category: "JavaScript Fundamentals",
    tags: ["NaN", "data types", "error checking"],
    slug: "what-is-nan",
    markupFilePath: "/path/to/NotANumber.md",
    mdnUrls: [
      {
        label: "MDN Documentation on NaN",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN",
      },
      {
        label: "MDN Guide on isNaN() Function",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN",
      },
    ],
  },
  {
    question:
      "Explain the difference between null and undefined in JavaScript.",
    shortDescription: "Distinguishing null and undefined in JavaScript.",
    category: "JavaScript Fundamentals",
    tags: ["null", "undefined", "data types"],
    slug: "null-vs-undefined",
    markupFilePath: "/path/to/NullUndefined.md",
    mdnUrls: [
      {
        label: "MDN Documentation on null",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",
      },
      {
        label: "MDN Documentation on undefined",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",
      },
    ],
  },
  {
    question: "What are JavaScript Generators and how do you use them?",
    shortDescription: "Understanding and using JavaScript Generators.",
    category: "Advanced Concepts",
    tags: ["generators", "ES6", "iterators"],
    slug: "javascript-generators",
    markupFilePath: "/path/to/Generators.md",
    mdnUrls: [
      {
        label: "MDN Documentation on Generators",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator",
      },
    ],
  },
  {
    question: "Can you explain the concept of destructuring in ES6?",
    shortDescription: "Explanation of destructuring in ECMAScript 6.",
    category: "Advanced Concepts",
    tags: ["destructuring", "ES6", "syntax"],
    slug: "es6-destructuring",
    markupFilePath: "/path/to/ES6Destructuring.md",
    mdnUrls: [
      {
        label: "MDN Documentation on Destructuring Assignment",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",
      },
    ],
  },
  {
    question:
      "What is the Spread Operator and Rest Parameter and how are they used?",
    shortDescription:
      "Using the Spread Operator and Rest Parameter in JavaScript.",
    category: "Advanced Concepts",
    tags: ["spread operator", "rest parameter", "ES6"],
    slug: "spread-operator-rest-parameter",
    markupFilePath: "/path/to/SpreadOperatorRestParameter.md",
    mdnUrls: [
      {
        label: "MDN Documentation on Spread Syntax",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
      },
      {
        label: "MDN Documentation on Rest Parameters",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters",
      },
    ],
  },
  {
    question:
      "What are JavaScript Modules? Discuss ES6 modules (import/export) vs CommonJS (require/module.exports).",
    shortDescription: "Comparison of ES6 modules and CommonJS in JavaScript.",
    category: "Advanced Concepts",
    tags: ["modules", "ES6", "CommonJS"],
    slug: "javascript-modules",
    markupFilePath: "/path/to/Modules.md",
    mdnUrls: [
      {
        label: "MDN Documentation on Modules",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
      },
      {
        label: "MDN Documentation on import/export",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import",
      },
      {
        label: "MDN Documentation on require/module.exports",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/require",
      },
    ],
  },
  {
    question:
      "How does JavaScript handle asynchronous code? Discuss callbacks, promises, and async/await.",
    shortDescription:
      "Exploring asynchronous code handling in JavaScript using callbacks, promises, and async/await.",
    category: "Advanced Concepts",
    tags: ["asynchronous", "callbacks", "promises", "async/await"],
    slug: "asynchronous-code-js",
    markupFilePath: "/path/to/AsynchronousCode.md",
    mdnUrls: [
      {
        label: "MDN Documentation on Asynchronous Programming",
        url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous",
      },
      {
        label: "MDN Documentation on Promises",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
      },
      {
        label: "MDN Documentation on async function",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",
      },
    ],
  },
  {
    question:
      "What is the concept of currying in JavaScript, and how is it implemented?",
    shortDescription: "Understanding and implementing currying in JavaScript.",
    category: "Advanced Concepts",
    tags: ["currying", "functional programming"],
    slug: "currying-in-javascript",
    markupFilePath: "/path/to/Currying.md",
    mdnUrls: [
      {
        label: "MDN Documentation on Currying",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Currying",
      },
    ],
  },

  {
    question: "Can you explain event delegation and its advantages?",
    shortDescription:
      "Understanding event delegation and its benefits in JavaScript.",
    category: "Advanced Concepts",
    tags: ["event delegation", "events", "DOM"],
    slug: "event-delegation",
    markupFilePath: "/path/to/EventDelegation.md",
    mdnUrls: [
      {
        label: "MDN Documentation on Event Delegation",
        url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation",
      },
    ],
  },
  {
    question: "What are the new features introduced in ES6 (ECMAScript 2015)?",
    shortDescription: "Overview of new features in ECMAScript 2015 (ES6).",
    category: "Advanced Concepts",
    tags: ["ES6", "ECMAScript 2015", "new features"],
    slug: "es6-features",
    markupFilePath: "/path/to/ES6Features.md",
    mdnUrls: [
      {
        label: "MDN Documentation on ECMAScript 2015 (ES6)",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla",
      },
    ],
  },
  {
    question:
      "What is the Document Object Model (DOM)? How does JavaScript interact with the DOM?",
    shortDescription:
      "Exploring the Document Object Model (DOM) and its interaction with JavaScript.",
    category: "Browser and DOM",
    tags: ["DOM", "JavaScript", "web development"],
    slug: "dom-and-javascript",
    markupFilePath: "/path/to/DOM.md",
    mdnUrls: [
      {
        label: "MDN Documentation on DOM",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
      },
    ],
  },
  {
    question:
      "How does the browser render a web page using HTML, CSS, and JavaScript?",
    shortDescription:
      "Understanding the process of web page rendering by browsers.",
    category: "Browser and DOM",
    tags: ["rendering", "HTML", "CSS", "JavaScript"],
    slug: "browser-web-page-rendering",
    markupFilePath: "/path/to/BrowserWebPageRendering.md",
    mdnUrls: [
      {
        label: "MDN Guide on How Browsers Work",
        url: "https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work",
      },
    ],
  },
  {
    question:
      "What are the different ways to select elements in the DOM using JavaScript?",
    shortDescription:
      "Various methods for selecting DOM elements using JavaScript.",
    category: "Browser and DOM",
    tags: ["DOM", "element selection", "JavaScript"],
    slug: "selecting-dom-elements",
    markupFilePath: "/path/to/SelectingDomElements.md",
    mdnUrls: [
      {
        label: "MDN Documentation on Selecting DOM Elements",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector",
      },
    ],
  },
  {
    question: "Explain how document.ready is different from window.onload.",
    shortDescription:
      "Differentiating between document.ready and window.onload in the context of web page loading.",
    category: "Browser and DOM",
    tags: ["document.ready", "window.onload", "DOM", "events"],
    slug: "document-ready-vs-window-onload",
    markupFilePath: "/path/to/DocumentReadyVsWindowOnload.md",
    mdnUrls: [
      {
        label: "MDN Documentation on window.onload",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event",
      },
      {
        label: "MDN Documentation on DOMContentLoaded",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event",
      },
    ],
  },
  {
    question: "How do you add or remove an element from the DOM?",
    shortDescription:
      "Techniques for adding and removing elements in the DOM using JavaScript.",
    category: "Browser and DOM",
    tags: ["DOM manipulation", "add element", "remove element"],
    slug: "add-remove-element-dom",
    markupFilePath: "/path/to/AddRemoveElementDOM.md",
    mdnUrls: [
      {
        label: "MDN Documentation on Adding/Removing DOM Elements",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement",
      },
    ],
  },
  {
    question:
      "What are Web APIs in the context of JavaScript and browser environments? Discuss examples like Fetch API, DOM API, etc.",
    shortDescription:
      "Overview of Web APIs in JavaScript, including examples like Fetch API and DOM API.",
    category: "Browser and DOM",
    tags: ["Web APIs", "JavaScript", "Fetch API", "DOM API"],
    slug: "web-apis-javascript",
    markupFilePath: "/path/to/WebAPIs.md",
    mdnUrls: [
      {
        label: "MDN Documentation on Web APIs",
        url: "https://developer.mozilla.org/en-US/docs/Web/API",
      },
      {
        label: "MDN Documentation on Fetch API",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
      },
      {
        label: "MDN Documentation on DOM API",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
      },
    ],
  },
  {
    question:
      "How do you handle exceptions in JavaScript? Discuss try, catch, finally, and error objects.",
    shortDescription:
      "Techniques for handling exceptions in JavaScript including try, catch, and finally blocks.",
    category: "Error Handling and Debugging",
    tags: ["exceptions", "try catch", "error handling"],
    slug: "handle-exceptions-javascript",
    markupFilePath: "/path/to/HandleExceptions.md",
    mdnUrls: [
      {
        label: "MDN Documentation on try...catch",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch",
      },
    ],
  },
  {
    question:
      "What are some common JavaScript coding errors you have encountered and how did you debug them?",
    shortDescription:
      "Exploring common JavaScript coding errors and debugging strategies.",
    category: "Error Handling and Debugging",
    tags: ["coding errors", "debugging", "JavaScript"],
    slug: "common-js-coding-errors",
    markupFilePath: "/path/to/CommonJSCodingErrors.md",
    mdnUrls: [
      {
        label: "MDN Documentation on Debugging JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Debugging",
      },
    ],
  },
  {
    question:
      "What are some tools or methods you use for debugging JavaScript code?",
    shortDescription: "Overview of tools and methods for debugging JavaScript.",
    category: "Error Handling and Debugging",
    tags: ["debugging", "tools", "JavaScript"],
    slug: "tools-methods-debugging-js",
    markupFilePath: "/path/to/ToolsMethodsDebugging.md",
    mdnUrls: [
      {
        label: "MDN Documentation on JavaScript Debugging",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Debugging",
      },
    ],
  },
  {
    question:
      "Explain the concept of 'strict mode' in JavaScript and its benefits.",
    shortDescription:
      "Understanding 'strict mode' in JavaScript and its advantages.",
    category: "Error Handling and Debugging",
    tags: ["strict mode", "best practices", "JavaScript"],
    slug: "strict-mode-javascript",
    markupFilePath: "/path/to/StrictMode.md",
    mdnUrls: [
      {
        label: "MDN Documentation on Strict Mode",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode",
      },
    ],
  },
];
module.exports = data;
