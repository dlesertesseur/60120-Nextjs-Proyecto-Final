"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Button = ({ text = null, onClick, href, children, disabled }) => {
  const router = useRouter();

  const onAction = () => {
    if (!disabled) {
      if(onClick){
        onClick();
      }

      if(href){
        router.push(href);
      }
    }
  };
  return (
    <button
      className={`${
        disabled ? "bg-gray-200" : "bg-blue-500"
      } h-10 text-sm font-semibold ${
        disabled ? "text-gray-400" : "text-white"
      } px-7 rounded-md`}
      onClick={onAction}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
