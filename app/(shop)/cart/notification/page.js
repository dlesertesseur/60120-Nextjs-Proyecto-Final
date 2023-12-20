import React from "react";
import { APP_DESCRIPTION, APP_NAME } from "@/app/data/dataConstants";
import Link from "next/link";

export async function generateMetadata({ params }) {
  return {
    title: `${APP_NAME} - Payment success`,
    description: `${APP_DESCRIPTION}`,
  }
}

const page = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* <p className="text-base font-semibold text-indigo-600">404</p> */}
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Su compra fue realizada con exito
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/home"
            className={`rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600`}
          >
            Ir a inicio
          </Link>
        </div>
      </div>
    </main>
  );
};

export default page;
