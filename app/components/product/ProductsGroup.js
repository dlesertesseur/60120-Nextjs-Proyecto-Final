import { getAllProductsBySituation, getOffers } from "@/app/data/ProductDao";
import React from "react";
import ProductCard from "./ProductCard";

const ProductsGroup = async ({situation}) => {
  const items = await getAllProductsBySituation(situation);

  return (
    <div className="flex-row gap-4">
      <div className="mb-4 mx-32">
        <div className="flex flex-nowrap gap-4 overflow-auto pb-5">
          {items.map((i) => (
            <ProductCard key={i.id} item={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsGroup;
