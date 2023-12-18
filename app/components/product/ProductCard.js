import Image from "next/image";
import Link from "next/link";
import React from "react";
import StockBadge from "../commons/StockBadge";

const ProductCard = ({ item }) => {
  return (
    <Link href={`/products/detail/${item.slug}`}>
      <div className="shadow-lg rounded-b-md bg-slate-100 w-64">
        <Image
          className="p-0"
          src={item.image ? item.image : "/noPicture.jpg"}
          alt=""
          width={256}
          height={256}
        />
        <div className="p-2">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
            {item.name}
          </h5>
          <div className="text-xs text-neutral-600">{item.description}</div>

          <div className="flex justify-between">
            <h4 className="my-2 text-xs font-medium leading-tight text-neutral-800">
              {item.brand}
            </h4>
            <StockBadge stock={item.stock} />
          </div>
          <h4 className=" text-xl font-medium leading-tight text-neutral-800">
            {`$ ${item.price}`}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
