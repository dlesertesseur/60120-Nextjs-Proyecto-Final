import React from "react";
import PaymentPanel from "@/app/components/product/PaymentPanel";
import CartPanel from "@/app/components/product/CartPanel";
import { APP_DESCRIPTION, APP_NAME } from "@/app/data/config";

export const metadata = {
  title: `${APP_NAME} - Cart`,
  description: `${APP_DESCRIPTION}`,
};

const Cart = () => {
  return (
    <div className="container m-auto">
      <div className="flex justify-center mt-2 mb-4">
        <div className="text-lg font-semibold">{"Productos en el carrito"}</div>
      </div>
      <div className="flex-1">
        <CartPanel />
      </div>
      <div className="flex justify-end">
        <PaymentPanel />
      </div>
    </div>
  );
};

export default Cart;
