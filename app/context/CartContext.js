"use client";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
  useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [productsInCart, setProductInCart] = useState([]);

  const addProductToCart = (product, quantity) => {
    const found = productsInCart.find((p) => p.id === product.id);
    if (found) {
      if(found.quantity){
        found.quantity += quantity;
      }else{
        found.quantity = quantity;
      }

      setProductInCart([...productsInCart]);
    } else {
      const obj = {...product, quantity:quantity}
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
    return(productsInCart.length > 0 ? true : false);
  };

  return (
    <CartContext.Provider
      value={{
        productsInCart,
        addProductToCart,
        updateProductInCart,
        removeProductFromCart,
        hasProducts
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
