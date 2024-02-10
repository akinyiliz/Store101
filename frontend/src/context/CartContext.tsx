/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";

import { products } from "../data/products";
import { Product } from "../types/product";

interface CartContextType {
  products: Product[];
  cart: { [productId: number]: number };
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<{ [productId: number]: number }>({});

  const getDefaultCart = () => {
    const defaultCart: { [productId: number]: number } = {};

    products.forEach((product: Product) => {
      defaultCart[product.id] = 0;
    });

    return defaultCart;
  };

  // lazy initialization approach to initialize the cart state only when necessary
  const lazyInitCart = () => {
    if (Object.keys(cart).length === 0) {
      setCart(getDefaultCart());
    }
  };

  const addToCart = (productId: number) => {
    lazyInitCart();
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId: number) => {
    lazyInitCart();
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: prevCart[productId] - 1,
    }));
  };

  const contextValue = { products, cart, addToCart, removeFromCart };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartContextProvider;
