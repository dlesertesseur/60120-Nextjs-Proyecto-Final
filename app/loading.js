import React from "react";

const loading = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="mt-6 text-base leading-7 text-gray-600">
         Cargando datos ...
        </p>
      </div>
    </main>
  );
};

export default loading;
