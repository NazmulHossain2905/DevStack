# 🚀 DevStack

**DevStack** is a modern technology-stack explorer that helps developers discover, explore, and compare different **frontend, backend, database, and development tooling** options to build the right stack for their next project.

## 🛠️ Technologies Used

- **React** — Building the user interface
- **TypeScript** — Type-safe development
- **Vite** — Development server and build tooling
- **Tailwind CSS** — Styling and responsive UI
- **React Icons** — Interface icons
- **React Toastify** — Toast notifications

## ✨ Features

- **🔍 Explore Technologies** — Browse different technologies across frontend, backend, databases, and development tooling.
- **⚖️ Compare Technology Options** — Explore technologies side by side to make it easier to understand and compare different choices.
- **🧩 Build Your Tech Stack** — Use the available technology options to put together a stack that fits your next project.

## 🌐 Live Demo

[Visit DevStack](https://dev-stack-nh.vercel.app/)

## 📂 Repository

[GitHub Repository](https://github.com/NazmulHossain2905/DevStack)

---

<br />

1. **What is JSX, and why is it used in React?**

   JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React UI code easier to read and write.

2. **What is the difference between props and state?**

   **Props** are data passed from a parent to a child component. **State** is data managed inside a component that can change over time.

3. **What does the `useState` hook do, and where did you use it in this project?**

   `useState` lets a component store and update data. I used it to manage things like the selected players and other changing UI data.

4. **What does the `useEffect` hook do, and why did you need it to load the JSON data?**

   `useEffect` runs side effects in a component. I used it to load the JSON data when the component first rendered.

5. **Why does every item in a `.map()` list need a unique `key` prop?**

   A unique `key` helps React identify each item and efficiently update the list when it changes.

6. **What is conditional rendering? Show one place you used it.**

   Conditional rendering means showing different UI based on a condition. For example, if the user hasn't selected any technologies for their stack, I can show an empty-stack message:

   ```jsx
   {
     selectedTechnologies.length === 0 ? (
       <p>Your stack is empty.</p>
     ) : (
       <SelectedStacks technologies={selectedTechnologies} />
     );
   }
   ```

7. **How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

   A parent passes data to a child using **props**. To send data back, the parent passes a **callback function** as a prop, which the child can call.
