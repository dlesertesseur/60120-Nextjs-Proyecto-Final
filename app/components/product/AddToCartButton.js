"use client";
import { CartContext } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const AddToCartButton = ({ product, quantity }) => {
  const router = useRouter();
  const { addProductToCart } = useContext(CartContext);

  const onClick = () => {
    addProductToCart(product, quantity);
    router.back();
  };

  return (
    <button
      className="bg-blue-500 h-10 text-sm font-semibold text-white px-7 rounded-md"
      onClick={onClick}
    >
      {"Agregar al carrito"}
    </button>
  );
};

export default AddToCartButton;
