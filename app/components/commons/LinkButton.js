"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const LinkButton = ({ text, href, className=null }) => {
  const path = usePathname();

  return (
    <div className={`flex`}>
      <Link
        className={`text-sm font-normal items-center hover:text-gray-900 text-gray-600 px-2 ${
          path === href ? "font-bold" : null
        } ${className}`}
        href={href}
      >
        {text}
      </Link>
    </div>
  );
};

export default LinkButton;
