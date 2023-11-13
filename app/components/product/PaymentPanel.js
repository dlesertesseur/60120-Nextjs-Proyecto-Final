import React from "react";
import LabelValue from "../commons/LabelValue";
import PaymentMethods from "../commons/PaymentMethods";
import Button from "../commons/Button";

const PaymentPanel = () => {
  return (
    <div className="flex-col rounded-md bg-slate-100 p-2">
      <LabelValue label={"Productos"} value={5} className="mb-2" />
      <LabelValue label={"Total"} value={`$ ${999.99}`} className="mb-5" />
      <PaymentMethods />
      <div className="flex w-full mt-4 justify-end">
        <Button text={"Finalizar compra"} />
      </div>
    </div>
  );
};

export default PaymentPanel;
