# simple-timer

## About

A count-up stopwatch that ticks every second, with start/stop and reset controls. The elapsed time persists across page refreshes via `localStorage`.

## What It Does

- Displays a running **second counter** that increments every second while active
- **Start / Stop** button toggles the timer on and off
- **Reset** clears the counter back to zero and removes stored state
- **Persists** the current elapsed time in `localStorage` so it survives page refreshes

## Tech Stack

| Area | Tool |
|------|------|
| UI | React 19, TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 |
| Persistence | `localStorage` |

## Getting Started

```bash
npm install
npm run dev
```

## Key Concepts Practiced

- `useState` with lazy initialization from `localStorage`
- `useEffect` for syncing state to storage on change
- `useRef` for holding the `setInterval` ID and managing DOM focus
- `setInterval` / `clearInterval` lifecycle tied to component state
- Component composition: display, controls, and timer logic separated
- Tailwind CSS v4 integration with Vite
