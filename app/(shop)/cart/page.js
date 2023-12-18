import React from "react";
import PaymentDatailPanel from "@/app/components/product/PaymentDetailPanel";
import CartPanel from "@/app/components/product/CartPanel";
import { APP_DESCRIPTION, APP_NAME } from "@/app/data/config";

export async function generateMetadata({ params }) {
  return {
    title: `${APP_NAME} - Cart`,
    description: `${APP_DESCRIPTION}`,
  };
}

const Cart = () => {
  return (
    <div className="container m-auto">
      <div className="flex-1">
        <CartPanel />
      </div>
      <div className="flex justify-end">
        <PaymentDatailPanel />
      </div>
    </div>
  );
};

export default Cart;
