import React from "react";
import ProductListPanel from "@/app/components/admin/ProductListPanel";
import { getAllProductsByOwner } from "@/app/data/ProductDao";

const page = async ({params}) => {
  const ownweId = params.id;
  const rows = await getAllProductsByOwner(ownweId);

  return (
    <div className="container m-auto">
      <ProductListPanel ownweId={ownweId} products={rows}/>
    </div>
  );
};

export default page;
