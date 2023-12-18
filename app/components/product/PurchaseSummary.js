"use client";
import React, { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";
import Table from "../commons/table/Table";

const columns = [
  { field: "image", label: "Foto", type: "image" },
  { field: "description", label: "Descripcion" },
  { field: "price", label: "Precio", type: "price" },
  { field: "brand", label: "Marca" },
  { field: "category", label: "Categoria" },
  { field: "quantity", label: "Cantidad", type: "quantityValue"},
  { field: "subTotal", label: "Sub total", type: "subTotal" },
  { field: "stock", label: "", type: "stock" },
];

const PurchaseSummary = () => {
  const { productsInCart } = useContext(CartContext);
  return (
    <div className="col-span-3">
      <div className="flex justify-center mt-2 mb-4">
        <div className="text-lg font-semibold">{"Resumen de compra"}</div>
      </div>
      <Table columns={columns} rows={productsInCart} />
    </div>
  );
};

export default PurchaseSummary;
