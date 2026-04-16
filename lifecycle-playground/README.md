# lifecycle-playground

## About

A side-by-side playground for observing React component lifecycle behavior in the browser console — comparing **class components** with **function components (hooks)**.

## What It Does

- Renders two cards: one for a **class-based** lifecycle logger and one for a **hooks-based** lifecycle logger
- Each card has **Mount / Unmount** buttons to conditionally render its logger, and an **Update** button to increment a counter
- All lifecycle phases (init, mount, update, unmount) are logged to the console so you can compare the two approaches

## Tech Stack

| Area | Tool |
|------|------|
| UI | React 19 |
| Language | JavaScript (JSX) |
| Build | Vite 6 |

## Getting Started

```bash
npm install
npm run dev
```

Open the app, then open **DevTools → Console** to see lifecycle logs as you mount, update, and unmount each component.

> **Tip:** React `StrictMode` (enabled in `main.jsx`) may run effects twice in development — this is expected behavior for surfacing side-effect bugs.

## Key Concepts Practiced

- Class lifecycle methods: `constructor`, `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`
- Hooks equivalents: `useState`, `useEffect` (mount/cleanup/dependency tracking)
- Mapping class lifecycle phases to `useEffect` patterns
- Conditional rendering for mount/unmount control
