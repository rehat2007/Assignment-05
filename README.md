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

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX to make creating and organizing UI components easier and more readable.

---

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time.

For example, technology data can be passed using props, while selected technologies can be stored in state.

---

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` allows a React component to store and update data.

I used `useState` in the `Main` component to store the technology list and the selected technologies.

```js
const [technologies, setTechnologies] = useState([]);
const [selectedCards, setSelectedCards] = useState([]);
