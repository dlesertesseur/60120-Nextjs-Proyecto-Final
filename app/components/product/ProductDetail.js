import { getProductBySlug } from "@/app/data/ProductDao";
import Image from "next/image";
import React from "react";
import ProductCounter from "../commons/ProductCounter";
import Button from "../commons/Button";
import PaymentMethods from "../commons/PaymentMethods";

const ProductDetail = ({ slug }) => {
  const item = getProductBySlug(slug);

  return (
    <div className="container m-auto">
      <div className="flex justify-center">
        <div className="flex justify-center items-center p-2 bg-gray-100 rounded-l-md">
          <Image src={item?.image} alt="" width={360} height={360} />
        </div>

        <div className="grid grid-rows-5 p-2 bg-gray-100 rounded-r-md">

          <div>
            <div className="my-2 text-2xl font-medium leading-tight text-neutral-800">
              {item?.description}
            </div>
            <div className="my-2 text-xs font-medium leading-tight text-neutral-800">
              {item?.brand}
            </div>
          </div>

          <div className="text-4xl font-medium leading-tight text-neutral-800">
            {`$ ${item?.price}`}
          </div>

          <div className="mt-2">
            <ProductCounter />
          </div>

          <div className ="mt-2">
            <PaymentMethods />
          </div>

          <div className="flex items-end">
            <Button text={"Agregar al carrito"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
