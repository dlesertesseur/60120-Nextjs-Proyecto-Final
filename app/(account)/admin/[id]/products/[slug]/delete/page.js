import React from "react";
import { APP_DESCRIPTION, APP_NAME } from "@/app/data/config";
import { getProductBySlug } from "@/app/data/ProductDao";
import CrudPanel from "./CrudPanel";
import { getCategories } from "@/app/data/CategoryDao";
import { SITUATIONS } from "@/app/data/data";

export const metadata = {
  title: `${APP_NAME} - SignIn`,
  description: `${APP_DESCRIPTION}`,
};

const page = async ({ params }) => {
  const slug = params.slug;
  const id = params.id;

  const product = await getProductBySlug(slug);
  const categories = await getCategories();
  categories.shift();

  const situations = SITUATIONS;

  return (
    <main>
      <CrudPanel
        ownerId={id}
        disabled={true}
        categories={categories}
        product={product}
        situations={situations}
      />
    </main>
  );
};

export default page;
