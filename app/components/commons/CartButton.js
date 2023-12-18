"use client";
import React from "react";
import IconButton from "./IconButton";
import { useCartContext } from "@/app/context/CartContext";

const CartButton = (props) => {
  const { hasProducts } = useCartContext();
  return <IconButton {...props} alert={hasProducts()} />;
};

export default CartButton;
