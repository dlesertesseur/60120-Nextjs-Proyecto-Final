import ProductsListPanel from "@/app/components/admin/ProductsListPanel";
import {
  getAllProducts,
  getAllProductsByCategory,
} from "@/app/data/ProductDao";
import React from "react";

const page = async ({ params }) => {
  let products = null;
  if (params.category) {
    products = await getAllProductsByCategory(params.category);
  } else {
    products = await getAllProducts();
  }

  return (
    <div className="container m-auto">
      <ProductsListPanel products={products} />
    </div>
  );
};

export default page;
