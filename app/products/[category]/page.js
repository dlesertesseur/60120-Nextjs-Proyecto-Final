import Filter from "@/app/components/product/Filter";
import ProductCard from "@/app/components/product/ProductCard";
import {
  getAllBrandsByCategory,
  getAllProducts,
  getAllProductsByCategory,
} from "@/app/data/ProductDao";
import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: params.category.toUpperCase(),
  };
}

const page = ({ params }) => {
  let items = null;

  if (params.category !== "all") {
    items = getAllProductsByCategory(params.category);
  } else {
    items = getAllProducts();
  }

  const brandsByCategory = getAllBrandsByCategory(params.category);

  return (
    <div className="grid grid-cols-6 gap-4 px-2">
      <div className="col-span-1">
        {params.category !== "all" ? (
          <Filter
            category={params.category}
            title={"Marcas"}
            items={brandsByCategory}
          />
        ) : null}
      </div>
      <div className="col-span-5 mb-4">
        <div className="flex flex-wrap gap-4 justify-left items-start">
          {items.map((i) => (
            <ProductCard key={i.id} item={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
