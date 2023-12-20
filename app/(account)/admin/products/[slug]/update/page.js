import React from "react";
import CrudPanel from "./CrudPanel";
import { APP_DESCRIPTION, APP_NAME } from "@/app/data/dataConstants";
import { getCategories } from "@/app/data/CategoryDao";
import { SITUATIONS } from "@/app/data/data";

export const metadata = {
  title: `${APP_NAME} - Update product`,
  description: `${APP_DESCRIPTION}`,
};

const page = async ({ params }) => {
  const slug = params.slug;

  // const product = await getProductBySlug(slug);
  const categories = await getCategories();

  const situations = SITUATIONS;

  return (
    <main>
      <CrudPanel
        categories={categories}
        // product={product}
        slug={slug}
        situations={situations}
      />
    </main>
  );
};
export default page;
