"use client";
import React, { useEffect, useState } from "react";
import Button from "../commons/Button";
import Table from "../commons/table/Table";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/app/context/UserContext";
import { getAllProductsByOwner } from "@/app/data/ProductDao";

const ProductsByUserListPanel = () => {
  const router = useRouter();

  const { user } = useUserContext();
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const rows = await getAllProductsByOwner(user.uid);
    setProducts(rows);
  };

  useEffect(() => {
    if (user && user.uid) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.uid]);

  const addProduct = () => {
    router.push(`/admin/products/new`);
  };
  const onUpdate = (item) => {
    router.push(`/admin/products/${item.slug}/update`);
  };
  const onDelete = (item) => {
    router.push(`/admin/products/${item.slug}/delete`);
  };

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
        <Button text={"Agregar producto"} onClick={addProduct} />
      </div>
      <Table
        columns={columns}
        rows={products ? products : []}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default ProductsByUserListPanel;
