import React from "react";
import { getAllProducts, getAllProductsByCategory } from "../data/ProductDao";
import ProductCard from "../components/product/ProductCard";

const ItemsList = async ({ category }) => {
  let items = null;

  if (category !== "all") {
    items = await getAllProductsByCategory(category);
  } else {
    items = await getAllProducts();
  }

  return items.map((i) => <ProductCard key={i.id} item={i} />);
};

export default ItemsList;
