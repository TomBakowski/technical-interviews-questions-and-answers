---
title: "Explain Event Bubbling and Event Capturing."
description: "Discuss the concept of event propagation in the DOM."
date: 2023-11-15T11:32:41
category: "JavaScript Fundamentals"
tags: ["DOM", "Events", "Bubbling", "Capturing"]
urls:
  - label: "MDN - Events"
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events"
  - label: "MDN - Event Bubbles"
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles"
---
     # Event Bubbling and Event Capturing

## Event Bubbling

- **Definition**: When an event is fired on an element in the DOM, it bubbles up to its ancestors. This means that the event is first handled by the innermost element and then propagated to its parent elements in the hierarchy.
- **Example**: If you click on a `<button>` inside a `<div>`, the click event will first be triggered on the button and then bubble up to the div and further up the DOM tree.

## Event Capturing (Event Trickling)

- **Definition**: This is the opposite of event bubbling. In event capturing, the event starts from the topmost element and goes down to the target element. It captures the event as it descends through the ancestors of the target element.
- **Example**: In the same scenario, with event capturing, the event starts at the topmost ancestor (like `<html>`) and travels down to the target element (`<button>`).

# Event Propagation in the DOM

- **Concept**: Event propagation is the process through which an event travels through the DOM tree. The event can be intercepted at any level in the DOM tree, either during its capturing phase (from top to bottom) or its bubbling phase (from bottom to top).
- **Stopping Propagation**: JavaScript provides methods like `stopPropagation()` to prevent further propagation of the event in the bubbling or capturing phase.
- **Practical Use**: Developers can use these concepts to handle events at different levels in the DOM. For instance, a single event handler on a parent element can manage events triggered by its child elements, utilizing event bubbling.

**Summary**: Event bubbling and capturing are two phases of event propagation in the DOM, allowing events to be handled at different levels, either as they bubble up from the target element or as they capture down to it.
