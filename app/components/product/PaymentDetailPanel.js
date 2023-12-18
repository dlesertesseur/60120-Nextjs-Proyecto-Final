"use client";
import React, { useEffect, useState } from "react";
import LabelValue from "../commons/LabelValue";
import PaymentMethods from "../commons/PaymentMethods";
import Button from "../commons/Button";
import { useCartContext } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

const PaymentDatailPanel = () => {
  const { productsInCart } = useCartContext();
  const router = useRouter();
  const [total, setTotal] = useState(0);
  const [units, setUnits] = useState(0);

  useEffect(() => {
    let ret = 0;
    let units = 0;
    productsInCart.forEach((p) => {
      ret += p.price * p.quantity;
      units += p.quantity;
    });

    setTotal(ret);
    setUnits(units);
  }, [productsInCart]);

  return (
    <div className="flex-col rounded-md bg-slate-100 p-4 w-full md:w-1/2 mb-4">
      <LabelValue
        label={"Productos"}
        value={productsInCart.length}
        className="mb-2"
      />
      <LabelValue label={"Unidades"} value={units} className="mb-2" />
      <LabelValue label={"Total"} value={`$ ${total}`} className="mb-5" />
      <PaymentMethods />
      <div className="flex w-full mt-4 justify-end">
        <Button
          disabled={productsInCart?.length > 0 ? false : true}
          text={"Finalizar compra"}
          onClick={() => {
            router.push("/cart/payment");
          }}
        />
      </div>
    </div>
  );
};

export default PaymentDatailPanel;
