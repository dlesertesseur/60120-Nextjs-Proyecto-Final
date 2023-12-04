"use client";
import React from "react";
import Button from "../commons/Button";
import Table from "../commons/table/Table";
import { useRouter } from "next/navigation";

const ProductListPanel = ({ ownweId, products }) => {
  const router = useRouter();
  
  const addProduct = () => {
    router.push(`/admin/${ownweId}/products/new`);
  };
  const onUpdate = (item) => {
    router.push(`/admin/${ownweId}/products/${item.slug}/update`);
  };
  const onDelete = (item) => {
    router.push(`/admin/${ownweId}/products/${item.slug}/delete`);
  };

  const columns = [
    { field: "image", label: "Foto", type: "image" },
    { field: "description", label: "Descripcion" },
    { field: "price", label: "Precio" },
    { field: "stock", label: "Stock" },
    { field: "brand", label: "Marca" },
    { field: "category", label: "Categoria" },
    { field: "situation", label: "Situacion" },
    { field: "images", label: "", type: "images" },
    { field: "update", label: "", type: "update" },
    { field: "delete", label: "", type: "delete" },
  ];

  return (
    <div className={""}>
      <div className="flex justify-between mt-2 mb-4 px-3">
        <div className="text-lg font-semibold">{"Lista de productos"}</div>
        <Button text={"Agregar producto"} onClick={addProduct} />
      </div>
      <Table
        columns={columns}
        rows={products ? products : []}
        onDelete={onDelete}
        onUpdate={onUpdate}
        onImages={() => {}}
      />
    </div>
  );
};

export default ProductListPanel;
