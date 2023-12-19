import React from "react";
import AdminProductsTable from "./AdminProductsTable";
import Button from "../commons/Button";

const ProductsListPanel = async ({products}) => {

  const columns = [
    { field: "image", label: "Foto", type: "image" },
    { field: "description", label: "Descripcion" },
    { field: "price", label: "Precio" },
    { field: "stock", label: "Stock" },
    { field: "brand", label: "Marca" },
    { field: "category", label: "Categoria" },
    { field: "situation", label: "Situacion" },
    { field: "update", label: "", type: "update" },
    { field: "delete", label: "", type: "delete" },
  ];

  return (
    <div className={""}>
      <div className="flex justify-between mt-2 mb-4 px-3">
        <div className="text-lg font-semibold">{"Lista de productos"}</div>
        <Button
          text={"Agregar producto"}
          href={`/admin/products/new`}
        />
      </div>

      <AdminProductsTable columns={columns} products={products} />
    </div>
  );
};

export default ProductsListPanel;
