import type { GetProductsResponse } from "../types/products";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";
export const PRODUCTS_ENDPOINT = `${API_BASE_URL}/products`;

export const getProducts: (
  signal: AbortSignal,
) => Promise<GetProductsResponse | undefined> = async (signal) => {
  try {
    const response = await fetch(PRODUCTS_ENDPOINT, { signal });
    if (!response.ok) {
      console.error("Failed to fetch products:", response);
      throw new Error(
        `Failed to fetch products with status ${response.status}`,
      );
    }
    const data: GetProductsResponse = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.warn("Fetch products request was aborted.");
    } else {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
};
