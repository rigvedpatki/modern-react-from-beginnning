# cdn-setup

## About

A minimal demo of running React directly in the browser using CDN scripts — no bundler, no `npm install`, no build step. The entire app lives in a single `index.html` file.

## What It Does

- Loads **React 18**, **ReactDOM 18**, and **Babel Standalone** from [unpkg](https://unpkg.com) CDN
- Renders a small `App` component with a `Header` child using in-browser JSX compilation (`<script type="text/babel">`)
- Demonstrates basic JSX interpolation, fragments, and conditional rendering with `&&`

## Tech Stack

| Area | Tool |
|------|------|
| UI | React 18 (UMD) |
| DOM | ReactDOM 18 (`createRoot`) |
| JSX | Babel Standalone (in-browser transpilation) |

> **Note:** This approach is for learning and quick experiments only — not suitable for production.

## How to Run

No install required. Open `index.html` in a browser, or serve the folder with any static server:

```bash
npx serve .
```

## Key Concepts Practiced

- Loading React via CDN without a build tool
- React 18 `createRoot` API
- In-browser JSX with Babel Standalone
- Functional components and basic conditional rendering
