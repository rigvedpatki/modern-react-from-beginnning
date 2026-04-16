# notes-app

## About

A client-side notes application for creating, viewing, and deleting notes with priority and category tagging. Notes persist in the browser via `localStorage`.

## What It Does

- **Add notes** with a title, description, priority (High / Medium / Low), and category (Work / Personal / Ideas) through a collapsible form
- **View notes** in a list with color-coded priority borders
- **Delete notes** with a confirmation modal
- **Persist notes** across page refreshes using `localStorage`

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

No backend or environment variables required.

## Key Concepts Practiced

- React hooks: `useState`, `useEffect` for state persistence
- Lifting state up — all CRUD logic lives in `App`, children receive callbacks
- Controlled form inputs with reusable field components
- TypeScript types and `as const` unions for priority/category
- Component composition: models, services, and UI separation
- Tailwind CSS v4 integration with Vite
