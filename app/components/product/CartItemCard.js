import Image from "next/image";
import React from "react";
import ProductCounter from "../commons/ProductCounter";
import Button from "../commons/Button";

const CartItemCard = ({ item }) => {
  return (
    <table className="my-2 py-2 bg-gray-100 rounded-md">
      <tr className="flex-row items-center">
        <td className="flex items-center">
          <Image src={item?.image} alt="" width={64} height={64} />
          <div className="felx items-center">
            <div>
              <div className="my-2 text-sm font-medium leading-tight text-neutral-800">
                {item?.description}
              </div>
              <div className="my-2 text-xs font-medium leading-tight text-neutral-800">
                {item?.brand}
              </div>
            </div>
          </div>
        </td>

        <td className="text-xl font-semibold text-neutral-800 flex items-center">
          {`$ ${item?.price}`}
        </td>

        <td className="flex items-center">
          <ProductCounter />
        </td>

        <td className="text-xl font-semibold text-neutral-800 flex items-center">
          {`$ ${item?.price}`}
        </td>

        <td className="flex items-center">
          <Button text={"Remove"} />
        </td>
      </tr>
    </table>
  );
};

export default CartItemCard;
