import LoadingData from "@/app/components/commons/LoadingData";
import React from "react";

const loading = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <LoadingData text="Cargando datos..." />
      </div>
    </main>
  );
};

export default loading;
