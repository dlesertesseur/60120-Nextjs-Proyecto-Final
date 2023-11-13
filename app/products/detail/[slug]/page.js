import ProductDetail from "@/app/components/product/ProductDetail";
import { getProductBySlug } from "@/app/data/ProductDao";
import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  const product = getProductBySlug(params.slug);
  return {
    title: product.description,
  };
}

const page = ({ params }) => {
  return (
    <main className="flex container m-auto">
      <ProductDetail slug={params.slug} />
    </main>
  );
};

export default page;
