"use client";
import ProductPanel from "@/app/components/product/ProductPanel";
import { UserContext } from "@/app/context/UserContext";
import { BASE_URL } from "@/app/data/config";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const CrudPanel = ({ ownerId, categories, product, situations }) => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  const onAction = async (id, formData) => {
    const newProduct = {
      sku: formData.get("sku"),
      category: formData.get("category"),
      ean: formData.get("ean"),
      stock: formData.get("stock"),
      slug: formData.get("slug"),
      currency: "PESOS",
      price: formData.get("price"),
      description: formData.get("description"),
      brand: formData.get("brand"),
      owner: user.id,
      situation: formData.get("situation"),
    };

    const body = JSON.stringify(newProduct);

    const url = `${BASE_URL}/api/products`;

    const res = await fetch(url, {
      method: "POST",
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
      product={product}
      title={"New product"}
      categories={categories}
      situations={situations}
      onAction={onAction}
    />
  );
};

export default CrudPanel;
