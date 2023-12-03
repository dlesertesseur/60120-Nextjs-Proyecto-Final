"use client";
import ProductPanel from "@/app/components/product/ProductPanel";
import { BASE_URL } from "@/app/data/config";
import { useRouter } from "next/navigation";

const CrudPanel = ({ ownerId, categories, product, situations }) => {
  const router = useRouter();

  const onAction = async (id, formData) => {
    const product = {
      id:id,
      sku: formData.get("sku"),
      category: formData.get("category"),
      ean: formData.get("ean"),
      stock: formData.get("stock"),
      slug: formData.get("slug"),
      price: formData.get("price"),
      description: formData.get("description"),
      brand: formData.get("brand"),
      situation: formData.get("situation"),
    };

    const body = JSON.stringify(product);

    const url = `${BASE_URL}/api/products`;

    const res = await fetch(url, {
      method: "PUT",
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
