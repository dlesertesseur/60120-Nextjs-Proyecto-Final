import React from "react";
import Table from "@/app/components/commons/table/Table";
import Button from "@/app/components/commons/Button";
import { getAllProductsByUser } from "@/app/data/ProductDao";

const page = () => {
  const rows = getAllProductsByUser("", 8);

  const onUpdate = () => {};
  const onDelete = () => {};

  const columns = [
    { field: "image", label: "Foto", type: "image" },
    { field: "description", label: "Descripcion" },
    { field: "price", label: "Precio" },
    { field: "stock", label: "Stock" },
    { field: "brand", label: "Marca" },
    { field: "category", label: "Categoria" },
  ];
  return (
    <div className="container m-auto">
      <div className="flex justify-between mt-2 mb-4 px-3">
        <div className="text-lg font-semibold">{"Lista de productos"}</div>
        <Button text={"Agregar producto"} />
      </div>
      <Table
        columns={columns}
        rows={rows}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default page;
