"use client";
import Image from "next/image";
import React, { useState } from "react";
import ProductCounter from "../commons/ProductCounter";
import PaymentMethods from "../commons/PaymentMethods";
import AddToCartButton from "./AddToCartButton";

const ProductDetail = ({ product }) => {
  
  const [quantity, setQuantity] = useState(product?.quantity ? product.quantity : 1);

  return (
    <div className="container m-auto">
      <div className="flex justify-center">
        <div className="flex justify-center items-center p-2 bg-gray-100 rounded-l-md">
          <Image src={product?.image} alt="" width={360} height={360} />
        </div>

        <div className="grid grid-rows-5 p-2 bg-gray-100 rounded-r-md">
          <div>
            <div className="my-2 text-2xl font-medium leading-tight text-neutral-800">
              {product?.description}
            </div>
            <div className="my-2 text-xs font-medium leading-tight text-neutral-800">
              {product?.brand}
            </div>
          </div>

          <div className="text-4xl font-medium leading-tight text-neutral-800">
            {`$ ${product?.price}`}
          </div>

          <div className="mt-2">
            <ProductCounter setValue={setQuantity} value={quantity}/>
          </div>

          <div className="mt-2">
            <PaymentMethods />
          </div>

          <div className="flex items-end justify-end">
            <AddToCartButton product={product} quantity={quantity} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
