import Text from "@/app/components/commons/Text";
import Link from "next/link";
import React, { Suspense } from "react";
import LoadingData from "../../../../components/commons/LoadingData";
import ItemsList from "@/app/components/product/ItemsList";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `${params.category.toUpperCase()} | ${params.brand.toUpperCase()}`,
  };
}

const page = async ({ params }) => {
  return (
    <div className="flex-column justify-center">
      <div className="flex justify-center ">
        <div
          className={
            "flex rounded-full gap-3 bg-slate-200 px-3 py-1 mb-2 items-center"
          }
        >
          <Link href={`/products/${params.category}`}>
            <Text>{`${params.category.toUpperCase()}`}</Text>
          </Link>
          <Text className="px-0">{"/"}</Text>
          <Text>{`${params.brand.toUpperCase()}`}</Text>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-start">

        <Suspense fallback={<LoadingData text={"Loading brand ..."}/>}>
          <ItemsList category={params.category} brand={params.brand}/>
        </Suspense>
      </div>
    </div>
  );
};

export default page;
