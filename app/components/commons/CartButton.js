"use client";
import React, { useContext } from "react";
import IconButton from "./IconButton";
import { CartContext } from "@/app/context/CartContext";

const CartButton = (props) => {
  const { hasProducts } = useContext(CartContext);
  return <IconButton {...props} alert={hasProducts()} />;
};

export default CartButton;
