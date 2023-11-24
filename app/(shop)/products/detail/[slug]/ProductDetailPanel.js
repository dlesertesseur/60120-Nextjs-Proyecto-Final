import ProductDetail from "@/app/components/product/ProductDetail";
import { getProductBySlug } from "@/app/data/ProductDao";
import React from "react";

const ProductDetailPanel = async ({ slug }) => {
  const product = await getProductBySlug(slug);
  return <ProductDetail product={product} />;
};

export default ProductDetailPanel;
