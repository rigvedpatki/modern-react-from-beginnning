import { useEffect, useState } from "react";
import type { Product } from "../types/products";
import { getProducts } from "../services/products-rest-api";

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async (signal: AbortSignal) => {
      setLoading(true);
      setError(null);
      try {
        const response = await getProducts(signal);
        if (!response) {
          console.warn("No products data received.");
          setProducts([]);
          return;
        }
        console.log("Products loaded:", response);
        setProducts(response);
      } catch (error) {
        console.error("Error loading products:", error);
        setError("Failed to load products.");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    const controller = new AbortController();
    const signal = controller.signal;
    fetchProducts(signal);
    return () => controller.abort();
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
