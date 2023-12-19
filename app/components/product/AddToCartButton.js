"use client";
import React from "react";
import { useCartContext } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

const AddToCartButton = ({ product, quantity, disabled }) => {
  const router = useRouter();
  const { addProductToCart } = useCartContext();

  const onClick = () => {
    addProductToCart(product, quantity);
    router.back();
  };

  return (
    <button
      disabled={disabled}
      className={`h-10 text-sm font-semibold px-7 rounded-md ${
        disabled ? "text-gray-500" : "text-white"
      } ${disabled ? "bg-gray-300" : "bg-blue-500"}`}
      onClick={onClick}
    >
      {"Agregar al carrito"}
    </button>
  );
};

export default AddToCartButton;
