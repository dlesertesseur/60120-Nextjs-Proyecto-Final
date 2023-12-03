import React from "react";
import CrudPanel from "./CrudPanel";
import { APP_DESCRIPTION, APP_NAME } from "@/app/data/config";
import { getCategories } from "@/app/data/CategoryDao";
import { SITUATIONS } from "@/app/data/data";

export const metadata = {
  title: `${APP_NAME} - New product`,
  description: `${APP_DESCRIPTION}`,
};

const page = async ({ params }) => {
  const ownerId = params.id;
  const categories = await getCategories();
  categories.shift();

  const situations = SITUATIONS;

  const newProduct = {
    sku: null,
    category: null,
    ean: null,
    stock: 0,
    image: null,
    id: null,
    slug: null,
    currency: null,
    price: 0,
    description: null,
    brand: null,
    owner: null,
    situation: null,
  };

  return (
    <main>
      <CrudPanel
        ownerId={ownerId}
        categories={categories}
        product={newProduct}
        situations={situations}
      />
    </main>
  );
};
export default page;
