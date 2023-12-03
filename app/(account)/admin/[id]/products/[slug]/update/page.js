import React from "react";
import CrudPanel from "./CrudPanel";
import { APP_DESCRIPTION, APP_NAME } from "@/app/data/config";
import { getProductBySlug } from "@/app/data/ProductDao";
import { getCategories } from "@/app/data/CategoryDao";
import { SITUATIONS } from "@/app/data/data";

export const metadata = {
  title: `${APP_NAME} - Update product`,
  description: `${APP_DESCRIPTION}`,
};

const page = async ({ params }) => {
  const id = params.id;
  const slug = params.slug;

  const product = await getProductBySlug(slug);
  const categories = await getCategories();

  const situations = SITUATIONS;

  return (
    <main>
      <CrudPanel
        ownerId={id}
        categories={categories}
        product={product}
        situations={situations}
      />
    </main>
  );
};
export default page;
