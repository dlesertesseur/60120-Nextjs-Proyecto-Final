import React from "react";

const Banner = ({ title, subtitle }) => {
  return (
      <div className="flex h-full items-center bg-slate-100 rounded-md py-3 mx-32 mb-3">
        <div className="flex-1">
          <div className="mb-2 text-center w-full text-4xl font-bold text-black">
            {title}
          </div>
          <div className="text-center w-full text-xl font-medium text-gray-600">
            {subtitle}
          </div>
        </div>
      </div>
  );
};

export default Banner;
