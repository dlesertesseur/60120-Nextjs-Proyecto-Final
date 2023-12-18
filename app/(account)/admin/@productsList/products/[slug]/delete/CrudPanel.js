"use client";
import React from "react";
import ProductPanel from "@/app/components/product/ProductPanel";
import { useRouter } from "next/navigation";

const CrudPanel = ({ categories, product, situations, disabled = false }) => {
  const router = useRouter();

  const onAction = async (id, values) => {
    const product = {
      id: id,
      slug: values.slug
    };

    const body = JSON.stringify(product);

    const url = `/api/products`;

    const res = await fetch(url, {
      method: "DELETE",
      body: body,
    });

    const ret = await res.json();

    if (ret.error) {
    } else {
      router.replace(`/admin`);
    }
  };

  return (
    <ProductPanel
      disabled={disabled}
      product={product}
      title={"Delete product"}
      categories={categories}
      situations={situations}
      onAction={onAction}
    />
  );
};

export default CrudPanel;
