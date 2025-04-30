🔢 Faulty Calculator

A fun twist on a basic calculator — it **intentionally makes mistakes 10% of the time**!  
Built using **HTML**, **CSS**, and **JavaScript**, this project helps beginners explore DOM interaction, event handling, conditional logic, and probability.

---

✨ Features

- Perform basic arithmetic operations: `+`, `-`, `*`, `/`
- Occasionally (10% chance), it swaps the operator to simulate a **faulty result**
- Simple and responsive UI
- Real-time result display on button click

---

🤖 Faulty Logic Rules

When a faulty calculation is triggered (10% probability), the operator is replaced as follows:

| Original Operator | Faulty Operator |
|-------------------|-----------------|
| `+`               | `-`             |
| `-`               | `/`             |
| `*`               | `+`             |
| `/`               | `**` (exponentiation) |

This introduces an element of surprise and demonstrates how random events can be handled in JavaScript.
