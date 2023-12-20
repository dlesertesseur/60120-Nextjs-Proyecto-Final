"use client";
import React, { useEffect, useState } from "react";
import ProductPanel from "@/app/components/product/ProductPanel";
import { useRouter } from "next/navigation";

const CrudPanel = ({ categories, slug, situations, disabled = false }) => {
  const router = useRouter();

  const [product, setProduct] = useState(null);

  const getData = async () => {
    const url = `/api/products/${slug}`;
    const res = await fetch(url, { cache: "no-store" });
    const ret = await res.json();
    setProduct(ret);
  };

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

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
