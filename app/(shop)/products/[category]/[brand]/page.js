import Text from "@/app/components/commons/Text";
import ProductCard from "@/app/components/product/ProductCard";
import { getAllProductsByCategoryAndBrand } from "@/app/data/ProductDao";
import Link from "next/link";
import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `${params.category.toUpperCase()} | ${params.brand.toUpperCase()}`,
  };
}

const page = async ({ params }) => {
  let items = [];

  if (params.category !== "all") {
    items = await getAllProductsByCategoryAndBrand(
      params.category,
      params.brand
    );
  }

  return (
    <div className="flex-column justify-center">
      <div className="flex justify-center ">
        <div
          className={
            "flex rounded-full gap-3 bg-slate-200 px-3 py-1 mb-2 items-center"
          }
        >
          <Link href={`/products/${params.category}`}>
            <Text>{`${params.category.toUpperCase()}`}</Text>
          </Link>
          <Text className="px-0">{"/"}</Text>
          <Text>{`${params.brand.toUpperCase()}`}</Text>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-start">
        {items.map((i) => (
          <ProductCard key={i.id} item={i} />
        ))}
      </div>
    </div>
  );
};

export default page;
