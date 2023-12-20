"use client";
import React from "react";
import { useRouter } from "next/navigation";

const RefreshButton = ({ text = null, disabled }) => {
  const router = useRouter();

  const onAction = () => {
    if (!disabled) {
      router.refresh();
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
    </button>
  );
};

export default RefreshButton;
