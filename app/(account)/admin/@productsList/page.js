import ProductsListPanel from "@/app/components/admin/ProductsListPanel";
import React from "react";

const page = async ({ params }) => {
  return (
    <div className="container m-auto">
      <ProductsListPanel />
    </div>
  );
};

export default page;
