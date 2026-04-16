# rating-ui

## About

A reusable star-rating widget that collects a 1–5 star rating with hover preview, contextual feedback text, and a thank-you confirmation modal.

## What It Does

- Displays 5 interactive stars with **hover preview** and **click to select**
- Shows **contextual feedback** for each rating level (e.g. "Terrible" → "Love it!")
- **Submit** is disabled until a rating is chosen
- A **confirmation modal** appears on submit, showing the selected rating
- Fully configurable via props: heading, star color, and feedback messages

## Tech Stack

| Area | Tool |
|------|------|
| UI | React 19 |
| Language | JavaScript (JSX) |
| Build | Vite 8 |
| Styling | Plain CSS |

## Getting Started

```bash
npm install
npm run dev
```

## Key Concepts Practiced

- Component composition: `Rating` → `Star`, `Button`, `Modal`
- `useState` for rating selection, hover state, and submission tracking
- Props as component API — parent customizes copy and styling without changing internals
- Presentational vs container component patterns
- Event handling for hover, click, and modal interactions
