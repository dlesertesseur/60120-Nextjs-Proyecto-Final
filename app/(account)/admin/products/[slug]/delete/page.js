import React from "react";
import { APP_DESCRIPTION, APP_NAME } from "@/app/data/dataConstants";
// import { getProductBySlug } from "@/app/data/ProductDao";
import { getCategories } from "@/app/data/CategoryDao";
import { SITUATIONS } from "@/app/data/data";
import CrudPanel from "./CrudPanel";

export const metadata = {
  title: `${APP_NAME} - SignIn`,
  description: `${APP_DESCRIPTION}`,
};

const page = async ({ params }) => {
  const slug = params.slug;

  // const product = await getProductBySlug(slug);
  const categories = await getCategories();
  categories.shift();

  const situations = SITUATIONS;

  return (
    <main>
      <CrudPanel
        disabled={true}
        slug={slug}
        categories={categories}
        // product={product}
        situations={situations}
      />
    </main>
  );
};

export default page;
