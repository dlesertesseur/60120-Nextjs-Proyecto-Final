import React from "react";
import {
  getAllProducts,
  getAllProductsByCategory,
  getAllProductsByCategoryAndBrand,
} from "../../data/ProductDao";
import ProductCard from "./ProductCard";

const ItemsList = async ({ category, brand = null }) => {
  let items = null;

  if (category !== "all") {
    if (brand) {
      items = await getAllProductsByCategoryAndBrand(category, brand);
    } else {
      items = await getAllProductsByCategory(category);
    }
  } else {
    items = await getAllProducts();
  }

  return items.map((i) => <ProductCard key={i.id} item={i} />);
};

export default ItemsList;
