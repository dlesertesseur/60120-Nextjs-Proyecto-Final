import React from "react";

const StockBadge = ({ stock }) => {
  const create = (stock) => {
    let ret = null;
    if (stock === 0) {
      ret = (
        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
          {"Sin stock"}
        </span>
      );
    }
    if (ret === null && stock < 10) {
      ret = (
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
          {"Ultimas unidades"}
        </span>
      );
    }

    return ret;
  };

  return <div className="flex items-center">{create(stock)}</div>;
};

export default StockBadge;
