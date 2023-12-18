"use client";
import React from "react";
import { useCartContext } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

const AddToCartButton = ({ product, quantity }) => {
  const router = useRouter();
  const { addProductToCart } = useCartContext();

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
