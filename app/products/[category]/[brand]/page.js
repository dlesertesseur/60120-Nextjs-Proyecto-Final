import Filter from "@/app/components/product/Filter";
import ProductCard from "@/app/components/product/ProductCard";
import {
  getAllBrandsByCategory,
  getAllProducts,
  getAllProductsByCategory,
  getAllProductsByCategoryAndBrand,
} from "@/app/data/ProductDao";
import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `${params.category.toUpperCase()} | ${params.brand.toUpperCase()}`,
  };
}


const page = ({ params }) => {
  let items = [];

  if (params.category !== "all") {
    items = getAllProductsByCategoryAndBrand(params.category, params.brand);
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center items-start">
      {items.map((i) => (
        <ProductCard key={i.id} item={i} />
      ))}
    </div>
  );
};

export default page;
