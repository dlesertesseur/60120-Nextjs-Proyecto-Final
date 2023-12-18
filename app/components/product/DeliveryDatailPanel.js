"use client";
import React, { useEffect, useState } from "react";
import LabelValue from "../commons/LabelValue";
import PaymentMethods from "../commons/PaymentMethods";
import Button from "../commons/Button";
import { useCartContext } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/app/context/UserContext";
import InputText from "../commons/InputText";

const DeliveryDetailPanel = () => {
  const { productsInCart, clearCart } = useCartContext();
  const { userInfo } = useUserContext();
  const router = useRouter();
  const [total, setTotal] = useState(0);
  const [units, setUnits] = useState(0);
  const [cartNumber, setCartNumber] = useState(null);
  const [items, setItems] = useState(null);

  useEffect(() => {
    let ret = 0;
    let units = 0;
    let q = 0;
    const items = [];

    productsInCart.forEach((p) => {
      if (p.stock > 0) {
        if (p.stock >= p.quantity) {
          q = p.quantity;
        } else {
          q = p.quantity - p.stock;
        }
      } else {
        q = 0;
      }

      ret += p.price * q;
      units += q;

      items.push({ productId: p.id, quantity: q, total: (p.price * q) });

      q = 0;

    });

    setTotal(ret);
    setUnits(units);
    setItems(items);

  }, [productsInCart]);

  const onAction = async () => {
    const newpPurchase = {
      user: userInfo.email,
      total: total,
      units: units,
      products: items,
    };

    const body = JSON.stringify(newpPurchase);
    const url = `/api/purchases`;

    const res = await fetch(url, {
      method: "POST",
      body: body,
    });

    const ret = await res.json();

    if (ret.error) {
    } else {
      clearCart();
      router.replace(`/home`);
    }
  };

  return (
    <div className="flex gap-2 p-4 w-full mb-4">
      <div className="flex-col rounded-md bg-slate-100 p-4 w-1/2 mb-4">
        <LabelValue
          label={"Productos"}
          value={productsInCart.length}
          className="mb-2"
        />
        <LabelValue label={"Unidades"} value={units} className="mb-2" />
        <LabelValue label={"Total"} value={`$ ${total}`} className="mb-5" />
        <div className="w-1/2">
          <InputText
            label={"Numero de tarjeta"}
            setValue={(e) => {
              setCartNumber(e.target.value);
            }}
            value={cartNumber}
          />
        </div>
      </div>

      <div className="flex-col rounded-md bg-slate-100 p-4 w-1/2 mb-4">
        <LabelValue
          label={"Usuario"}
          value={`${userInfo.name} ${userInfo.lastName}`}
          className="mb-2"
        />
        <LabelValue
          label={"Direccion de entrega"}
          value={userInfo.address}
          className="mb-2"
        />
        <LabelValue
          label={"Correo electronico"}
          value={userInfo.email}
          className="mb-4"
        />
        <PaymentMethods />
        <div className="flex w-full mt-4 justify-end">
          <Button
            disabled={
              productsInCart?.length > 0 && cartNumber?.length > 0
                ? false
                : true
            }
            text={"Pagar"}
            onClick={onAction}
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetailPanel;
