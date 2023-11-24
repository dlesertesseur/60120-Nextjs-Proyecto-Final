import { getProductBySlug } from "@/app/data/ProductDao";
import React, { Suspense } from "react";
import ProductDetailPanel from "./ProductDetailPanel";
import LoadingData from "../../[category]/LoadingData";

export async function generateMetadata({ params, searchParams }, parent) {
  const product = await getProductBySlug(params.slug);
  return {
    title: product.description,
  };
}

const page = async ({ params }) => {
  return (
    <main className="flex container m-auto">
      <Suspense fallback={<LoadingData text={"Loading product details ..."}/>}> 
        <ProductDetailPanel slug={params.slug} />
      </Suspense>
    </main>
  );
};

export default page;
