# crypto-dash

## About

Crypto Dash is a React application that displays live cryptocurrency data using the [CoinGecko API](https://www.coingecko.com/en/api). Browse, filter, sort, and explore the top cryptocurrencies by market cap.

## What It Does

- **Home page** — Fetches and displays top coins in a responsive card grid. Filter by name/symbol, sort by market cap, price, volume, or 24h change, and adjust the number of coins loaded (10–100).
- **Coin detail page** — Shows detailed coin info (rank, prices in INR, supply, ATH/ATL, links, categories) and a 7-day price line chart.
- **About page** — Static overview of the app.
- **404 page** — Custom not-found page.

## Tech Stack

| Area | Tool |
|------|------|
| UI | React 19, TypeScript |
| Build | Vite 8 |
| Routing | React Router v7 |
| Charts | Chart.js 4, react-chartjs-2, date-fns |
| Loading | react-spinners |
| HTTP | Native `fetch` with `AbortController` |

## Getting Started

```bash
npm install

# Create .env with:
# VITE_COIN_GECKO_API_BASE_URL

npm run dev
```

## Key Concepts Practiced

- React hooks: `useState`, `useEffect`, `useMemo`, `useParams`
- Client-side filtering and sorting with derived state
- Integrating REST APIs with abort/cancellation support
- Routing with shareable URLs (`/coin/:id`)
- Chart.js time-scale charts in React
- Component composition (pages vs presentational components)
