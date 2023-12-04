import Text from "@/app/components/commons/Text";
import Filter from "@/app/components/product/Filter";
import { getAllBrandsByCategory } from "@/app/data/ProductDao";
import React, { Suspense } from "react";
import ItemsList from "../../../components/product/ItemsList";
import LoadingData from "../../../components/commons/LoadingData";
import { getCategories } from "@/app/data/CategoryDao";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: params.category.toUpperCase(),
  };
}

export async function generateStaticParams() {
  const categories = await getCategories();
 
  const ret = categories.map((c) => ({
    category: c.slug,
  }));

  return ret;
}

const page = async ({ params }) => {
  const brandsByCategory = await getAllBrandsByCategory(params.category);

  return (
    <div className="grid grid-cols-6 gap-4 px-2">
      <div className="col-span-1">
        {params.category !== "all" ? (
          <Filter
            category={params.category}
            title={"Marcas"}
            items={brandsByCategory}
          />
        ) : null}
      </div>

      <div className="col-span-5 mb-4">
        <div className="flex justify-center">
          <Text className={"rounded-full bg-slate-200 px-3 py-1 mb-2"}>
            {`${params.category.toUpperCase()}`}
          </Text>
        </div>

        <div className="flex flex-wrap gap-4 justify-left items-start">
          <Suspense fallback={<LoadingData text="Loading category ..." />}>
            <ItemsList category={params.category} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default page;
