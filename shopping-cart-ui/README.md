# shopping-cart-ui

## About

**ShopMate** — a product catalog with a fully functional shopping cart. Browse products from a REST API, manage cart quantities with stock limits, and persist the cart across sessions via `localStorage`.

## What It Does

- **Browse products** in a responsive grid with images, prices, and stock info
- **Add to cart** with per-product quantity controls that respect available inventory
- **Cart dropdown** in the header with a badge showing total items, line-item subtotals, and a grand total
- **Clear cart** to remove all items at once
- **Persistent cart** — cart state survives page refreshes via `localStorage`
- **Mock API** powered by `json-server` with a Vite dev proxy

## Tech Stack

| Area | Tool |
|------|------|
| UI | React 19, TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 |
| Icons | react-icons |
| HTTP | Native `fetch` with `AbortController` |
| Mock API | json-server |
| Persistence | `localStorage` |

## Getting Started

```bash
npm install

# Terminal 1 — start the mock API
npm run json-server

# Terminal 2 — start the dev server
npm run dev
```

Vite proxies `/api` requests to `json-server` on port 8000.

## Key Concepts Practiced

- React **Context API** for global state (separate product and cart contexts)
- Custom hooks for data fetching with abort support
- TypeScript models for API responses
- Derived state with `useMemo` (cart totals)
- `localStorage` for client-side persistence
- Vite dev server proxy configuration
- Tailwind CSS v4 integration with Vite
