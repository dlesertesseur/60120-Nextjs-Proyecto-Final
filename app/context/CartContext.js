"use client";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
  const ctx = useContext(CartContext);
  return ctx;
};

export const CartProvider = ({ children }) => {
  const [productsInCart, setProductInCart] = useState([]);

  const addProductToCart = (product, quantity) => {
    const found = productsInCart.find((p) => p.id === product.id);
    if (found) {
      if (found.quantity) {
        found.quantity += quantity;
      } else {
        found.quantity = quantity;
      }

      setProductInCart([...productsInCart]);
    } else {
      const obj = { ...product, quantity: quantity };
      setProductInCart([...productsInCart, obj]);
    }
  };

  const updateProductInCart = (product, quantity) => {
    const found = productsInCart.find((p) => p.id === product.id);
    if (found) {
      found.quantity = quantity;
      setProductInCart([...productsInCart]);
    }
  };

  const removeProductFromCart = (product) => {
    const products = productsInCart.filter((p) => p.id !== product.id);
    setProductInCart(products);
  };

  const hasProducts = (product) => {
    return productsInCart.length > 0 ? true : false;
  };

  const clearCart = () => {
    setProductInCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        productsInCart,
        addProductToCart,
        updateProductInCart,
        removeProductFromCart,
        hasProducts,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
