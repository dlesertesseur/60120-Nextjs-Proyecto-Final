"use client";
import React, { useState } from "react";

const ProductCounter = () => {
  const [value, setValue] = useState(1);
  const increase = () => {
    setValue(value + 1);
  };

  const decreate = () => {
    if (value >= 1) {
      setValue(value - 1);
    } else {
      setValue(0);
    }
  };

  return (
    <div className={"flex justify-between w-32 p-1 border-2 border-gary-200 rounded-sm"}>
      <button
        className={"text-center text-white bg-blue-500 rounded-sm text-xl w-8 h-8"}
        onClick={increase}
      >
        {"+"}
      </button>
      <div className="text-center text-xl">{value}</div>
      <button
        className={"text-center text-white bg-blue-500 rounded-sm text-xl w-8 h-8"}
        onClick={decreate}
      >
        {"-"}
      </button>
    </div>
  );
};

export default ProductCounter;
