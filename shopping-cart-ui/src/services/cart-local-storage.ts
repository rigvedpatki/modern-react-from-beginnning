import type { CartItem } from "../context/CartContext";

const CART_STORAGE_KEY = "shopping_cart";

export const saveCartToLocalStorage = (cartItems: CartItem[]) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
};

export const loadCartFromLocalStorage = (): CartItem[] => {
  const storedCart = localStorage.getItem(CART_STORAGE_KEY);
  return storedCart ? JSON.parse(storedCart) : [];
};

export const clearCartFromLocalStorage = () => {
  localStorage.removeItem(CART_STORAGE_KEY);
};
