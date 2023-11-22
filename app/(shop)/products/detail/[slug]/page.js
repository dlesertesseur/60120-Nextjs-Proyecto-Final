import ProductDetail from "@/app/components/product/ProductDetail";
import { getProductBySlug } from "@/app/data/ProductDao";
import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  const product = await getProductBySlug(params.slug);
  return {
    title: product.description,
  };
}

const page = async ({ params }) => {
  
  const product = await getProductBySlug(params.slug);

  return (
    <main className="flex container m-auto">
      <ProductDetail product={product} />
    </main>
  );
};

export default page;
