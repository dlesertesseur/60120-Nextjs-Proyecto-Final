import Image from "next/image";
import React from "react";

const payments = [
  { src: "/images/payment/naranjax.webp" },
  { src: "/images/payment/cabal.webp" },
  { src: "/images/payment/amex.webp" },
  { src: "/images/payment/visa.webp" },
  { src: "/images/payment/mastercard.webp" },
];

const PaymentMethods = () => {
  return (
    <div className="flex-col space-y-2">
      <div className="text-xs font-medium">{"Ver medios de pago"}</div>
      <div className="flex justify-start space-x-2">
        {payments.map((p, index) => {
          return(<Image key={index} src={p.src} width={30} height={12} alt={""} />);
        })}
      </div>
    </div>
  );
};

export default PaymentMethods;
