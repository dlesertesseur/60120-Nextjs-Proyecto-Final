import DeliveryDetailPanel from "@/app/components/product/DeliveryDatailPanel";
import PaymentDatailPanel from "@/app/components/product/PaymentDetailPanel";
import PurchaseSummary from "@/app/components/product/PurchaseSummary";
import { APP_DESCRIPTION, APP_NAME } from "@/app/data/dataConstants";
import React from "react";

export const metadata = {
  title: `${APP_NAME} - Payment`,
  description: `${APP_DESCRIPTION}`,
};

const page = () => {
  return (
    <div className="container m-auto">
      <div className="flex-1">
        <PurchaseSummary />
      </div>
      <div className="flex justify-end">
        <DeliveryDetailPanel />
      </div>
    </div>
  );
};

export default page;
