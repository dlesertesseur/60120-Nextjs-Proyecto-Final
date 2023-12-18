import React from "react";

const StockStatus = ({ item }) => {
  const calculate = (stock, quantity) => {
    const diff = stock - quantity;

    let ret = null;
    if (diff < 0) {
      if (stock > 0) {
        ret = (
          <div
            className={`flex bg-yellow-400 h-8 text-xs font-semibold text-yellow-700 px-1 rounded-md justify-center items-center`}
          >
            {`STOCK PARCIAL (${stock})`}
          </div>
        );
      } else {
        ret = (
          <div
            className={`flex bg-red-500 h-8 text-xs font-semibold text-white px-1 rounded-md justify-center items-center`}
          >
            {`SIN STOCK (${stock})`}
          </div>
        );
      }
    }

    return ret;
  };

  const situation = calculate(item.stock, item.quantity);
  return situation;
};

export default StockStatus;
