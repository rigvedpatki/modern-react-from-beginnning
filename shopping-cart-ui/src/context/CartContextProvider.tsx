import { useEffect, useMemo, useState } from "react";
import { CartContext, type CartItem } from "./CartContext";
import type { Product } from "../types/products";
import {
  loadCartFromLocalStorage,
  saveCartToLocalStorage,
} from "../services/cart-local-storage";

type CartContextProviderProps = {
  children: React.ReactNode;
};

const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCart = loadCartFromLocalStorage();
    return storedCart;
  });

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.product.id === product.id,
      );
      if (existingIndex === -1) {
        return [...prevItems, { product, quantity: 1 }];
      }

      return prevItems.map((item, index) =>
        index === existingIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    });
  };
  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === productId,
      );
      if (!existingItem) {
        return prevItems;
      }
      if (existingItem.quantity === 1) {
        return prevItems.filter((item) => item.product.id !== productId);
      }
      return prevItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
    });
  };
  const clearCart = () => {
    setCartItems([]);
  };

  const totalQuantity = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  const totalAmount = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.quantity * item.product.price,
      0,
    );
  }, [cartItems]);

  useEffect(() => {
    saveCartToLocalStorage(cartItems);
  }, [cartItems]);

  return (
    <>
      <CartContext.Provider
        value={{
          cartItems,
          addToCart,
          removeFromCart,
          clearCart,
          totalQuantity,
          totalAmount,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
