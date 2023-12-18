import React from "react";
import { APP_DESCRIPTION, APP_NAME } from "@/app/data/config";
import SinginPanel from "@/app/components/admin/SinginPanel";
import Link from "next/link";

export async function generateMetadata({ params }) {
  return {
    title: `${APP_NAME} - Payment`,
    description: `${APP_DESCRIPTION}`,
  }
}

const page = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* <p className="text-base font-semibold text-indigo-600">404</p> */}
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Para finalizar la compra debe iniciar session
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/admin"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Iniciar session
          </Link>
        </div>
      </div>
    </main>
  );
};

export default page;
