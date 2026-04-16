import {
  SORT_OPTION_VALUES,
  type CoinDetails,
  type CoinMarketChart,
  type Coins,
} from "../models/coins";

export const COINGECKO_API_URL = import.meta.env
  .VITE_COIN_GECKO_API_BASE_URL as string;

export const COINGECKO_API_ENDPOINTS = {
  coinDetails: "/coins",
  coins: "/coins/markets",
} as const;

export const COINGECKO_API_QUERY_PARAM_KEYS = {
  vs_currency: "vs_currency",
  order: "order",
  per_page: "per_page",
  page: "page",
  sparkline: "sparkline",
} as const;

export type COINGECKO_API_QUERY_PARAM_KEYS_TYPE =
  (typeof COINGECKO_API_QUERY_PARAM_KEYS)[keyof typeof COINGECKO_API_QUERY_PARAM_KEYS];

export const COINGECKO_API_QUERY_PARAM_DEFAULT_VALUES: Record<
  COINGECKO_API_QUERY_PARAM_KEYS_TYPE,
  string
> = {
  vs_currency: "inr",
  order: SORT_OPTION_VALUES[1], // Default to "market_cap_desc"
  per_page: "10",
  page: "1",
  sparkline: "false",
};

export const fetchCoins = async (
  queryParams: Partial<Record<COINGECKO_API_QUERY_PARAM_KEYS_TYPE, string>>,
  signal: AbortSignal,
) => {
  const url = `${COINGECKO_API_URL}${COINGECKO_API_ENDPOINTS.coins}`;
  const apiQueryParams = Object.entries({
    ...COINGECKO_API_QUERY_PARAM_DEFAULT_VALUES,
    ...queryParams,
  })
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join("&");

  try {
    const response = await fetch(`${url}?${apiQueryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      signal,
    });
    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.status === 429) {
        throw Error("CoinGecko Rate Limit Reached. Please wait a minute.");
      }
      const error = errorData?.error || "Failed to fetch coins data";
      throw new Error(error);
    }

    const data = (await response.json()) as Coins;
    return data;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      console.warn("Fetch aborted:", error.message);
    } else {
      console.error("Error in fetchCoins:", error);
      throw error;
    }
  }
};

export const fetchCoinDetails = async (id: string, signal: AbortSignal) => {
  const url = `${COINGECKO_API_URL}${COINGECKO_API_ENDPOINTS.coinDetails}/${encodeURIComponent(id)}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      signal,
    });
    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.status === 429) {
        throw Error("CoinGecko Rate Limit Reached. Please wait a minute.");
      }
      const error = errorData?.error || "Failed to fetch coin details";
      throw new Error(error);
    }
    const data = (await response.json()) as CoinDetails;
    return data;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      console.warn("Fetch aborted:", error.message);
    } else {
      console.error("Error in fetchCoinDetails:", error);
      throw error;
    }
  }
};

export const fetchCoinMarketChart = async (
  id: string,
  signal: AbortSignal,
  vs_currency: string = "inr",
  days: number = 7,
) => {
  const url = `${COINGECKO_API_URL}${COINGECKO_API_ENDPOINTS.coinDetails}/${encodeURIComponent(
    id,
  )}/market_chart?vs_currency=${encodeURIComponent(
    vs_currency,
  )}&days=${encodeURIComponent(days.toString())}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      signal,
    });
    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.status === 429) {
        throw Error("CoinGecko Rate Limit Reached. Please wait a minute.");
      }
      const error = errorData?.error || "Failed to fetch coin market chart";
      throw new Error(error);
    }
    const data = (await response.json()) as CoinMarketChart;
    return data;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      console.warn("Fetch aborted:", error.message);
    } else {
      console.error("Error in fetchCoinMarketChart:", error);
      throw error;
    }
  }
};
