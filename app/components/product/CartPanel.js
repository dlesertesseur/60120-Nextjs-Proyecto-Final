"use client";
import React, { useContext } from "react";
import Table from "../commons/table/Table";
import { CartContext } from "@/app/context/CartContext";

const columns = [
  { field: "image", label: "Foto", type: "image" },
  { field: "description", label: "Descripcion" },
  { field: "price", label: "Precio", type: "price" },
  { field: "brand", label: "Marca" },
  { field: "category", label: "Categoria" },
  { field: "quantity", label: "Cantidad", type: "quantity" },
  { field: "subTotal", label: "Sub total", type: "subTotal" },
  { field: "delete", label: "", type: "delete" },
];

const CartPanel = () => {
  const { productsInCart, removeProductFromCart, updateProductInCart } =
    useContext(CartContext);

  const onDelete = (item) => {
    removeProductFromCart(item);
  };
  const onUpdate = (item, quantity) => {
    updateProductInCart(item, quantity);
  };

  return (
    <div className="col-span-3">
      <div className="flex justify-center mt-2 mb-4">
        <div className="text-lg font-semibold">{"Productos en el carrito"}</div>
      </div>
      <Table
        columns={columns}
        rows={productsInCart}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default CartPanel;
