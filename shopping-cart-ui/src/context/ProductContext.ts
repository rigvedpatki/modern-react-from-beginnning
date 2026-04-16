import { createContext, useContext } from "react";
import type { Product } from "../types/products";

type ProductContextType = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

export const ProductContext = createContext<ProductContextType>({
  products: [],
  loading: false,
  error: null,
});

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error(
      "useProductContext must be used within a ProductContextProvider",
    );
  }
  return context;
};
