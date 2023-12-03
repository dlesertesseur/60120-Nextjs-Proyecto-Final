"use client";
import React from "react";
import ProductPanel from "@/app/components/product/ProductPanel";
import { BASE_URL } from "@/app/data/config";
import { useRouter } from "next/navigation";

const CrudPanel = ({ ownerId, categories, product, situations, disabled = false }) => {
  const router = useRouter();

  const onAction = async (id, formData) => {
    const product = {
      id: id,
      slug: formData.get("slug"),
    };

    const body = JSON.stringify(product);

    const url = `${BASE_URL}/api/products`;

    const res = await fetch(url, {
      method: "DELETE",
      body: body,
    });

    const ret = await res.json();

    if (ret.error) {
    } else {
      router.replace(`/admin/${ownerId}`);
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
