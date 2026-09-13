# 🚀 DevStack Builder

DevStack Builder is a responsive web application that helps developers explore different technologies and build their ideal development stack. Users can browse technologies by category and select the tools they want to include in their stack.

## ✨ Features

- 📚 **Explore Technologies** — Browse different frontend, backend, database, and development tools.
- 🧩 **Build Your Stack** — Select technologies and create your own personalized development stack.
- 📱 **Fully Responsive** — Works smoothly on mobile, tablet, and desktop devices.

## 🛠️ Technologies Used

- React.js
- JavaScript
- Tailwind CSS
- Vite
- HTML5
- CSS3
- JSON
- React Hooks (`useState`, `useEffect`)

## 📸 Project Overview

DevStack Builder provides a simple and modern interface where users can explore available technologies and select the ones they want to use in their development stack.

The project focuses on practicing React concepts such as components, props, state management, hooks, conditional rendering, list rendering, and responsive UI development.

---

# ⚛️ React Questions & Answers

1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX because it makes the UI easier to write and understand.

2. What is the difference between props and state?

Props are used to send data from a parent component to a child component. State is data that belongs to a component and can change when the user interacts with the website.

3. What does the useState hook do, and where did you use it in this project?

useState is used to create and manage state in a React component. I used it to store the technologies data and update the selected technology stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect lets us run some code after the component renders. I used it to load the JSON data when the component started, so the technology data could be shown on the page.

5. Why does every item in a .map() list need a unique key prop?

React needs a unique key to identify each item in a list. It helps React understand which item was changed, added, or removed and update the UI correctly.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different UI based on a condition. In this project, I used it to show an empty stack message when there are no technologies in the selected stack.

Example:

{stack.length === 0 && <p>Your stack is empty</p>}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props. If the child needs to send something back, the parent can pass a function as a prop to the child. Then the child can call that function and send data back to the parent.
