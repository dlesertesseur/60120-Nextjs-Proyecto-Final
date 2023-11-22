import Text from "@/app/components/commons/Text";
import Filter from "@/app/components/product/Filter";
import {
  getAllBrandsByCategory,
} from "@/app/data/ProductDao";
import React, { Suspense } from "react";
import ItemsList from "../../ItemsList";
import LoadingData from "./LoadingData";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: params.category.toUpperCase(),
  };
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
          <Suspense fallback={<LoadingData />}>
            <ItemsList category={params.category} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default page;
