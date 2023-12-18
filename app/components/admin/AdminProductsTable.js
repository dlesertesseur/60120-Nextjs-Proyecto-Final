"use client";
import React from "react";
import Table from "../commons/table/Table";
import { useRouter } from "next/navigation";

const AdminProductsTable = ({columns, products}) => {
  const router = useRouter();
  const onUpdate = (item) => {
    router.push(`/admin/products/${item.slug}/update`);
  };
  const onDelete = (item) => {
    router.push(`/admin/products/${item.slug}/delete`);
  };
  return (
    <Table
      className
      columns={columns}
      rows={products ? products : []}
      onDelete={onDelete}
      onUpdate={onUpdate}
    />
  );
};

export default AdminProductsTable;
